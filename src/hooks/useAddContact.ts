import useLoader from '@/hooks/useLoader';
import {useCallback, useContext, useState} from 'react';
import IDraftContact from '@/models/IDraftContact';
import ContactService from '@/services/ContactService';
import {ContactsContext} from '@/store';

export default function useAddContact(draft: IDraftContact, changeDraft: Function) {
    const [generating, setGenerating] = useState(false);
    const { appendContact } = useContext(ContactsContext);
    const makeRequest = useLoader(setGenerating);

    const makeContact = (nickname: string) => ContactService.generateContact(nickname);

    const addContact = useCallback(() => makeRequest(async () => {
        const generatedContact = await makeContact(draft.nickname);
        const newContact = {
            ...draft,
            ...generatedContact,
        };

        changeDraft({ nickname: '', avatar: '' });
        appendContact(newContact);
    }), [draft]);

    return {
        generating,
        addContact,
    }
}