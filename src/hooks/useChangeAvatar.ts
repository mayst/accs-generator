import {useCallback} from 'react';
import debounce from 'lodash/debounce';
import ContactService from '@/services/ContactService';

export default function useChangeAvatar(changeDraft, setLoading) {
    const getAvatar = (nickname: string) => ContactService.generateAvatar(nickname);

    return useCallback(debounce(async (nickname: string) => {
        if (nickname.length) {
            const avatar = getAvatar(nickname);
            changeDraft({ avatar });
        } else {
            changeDraft({ avatar: '' });
        }

        setLoading(false);
    }, 2000), []);
}