import { useCallback, useContext, useState } from 'react';
import debounce from 'lodash/debounce';
import { Avatar, Button, CircularProgress, FormControl, TextField } from '@mui/material';
import { ContactsContext, DraftContext } from '@/store';
import ContactService from '@/services/ContactService';
import useLoader from "@/composables/useLoader";

function ContactForm() {
    const { appendContact } = useContext(ContactsContext);
    const { draft, changeDraft } = useContext(DraftContext);
    const getAvatar = (nickname: string) => ContactService.generateAvatar(nickname);
    const makeContact = (nickname: string) => ContactService.generateContact(nickname);

    const [loading, setLoading] = useState(false);
    const [generating, setGenerating] = useState(false);

    const changeAvatar = useCallback(debounce(async (nickname: string) => {
        if (nickname.length) {
            const avatar = getAvatar(nickname);
            changeDraft({ avatar });
        } else {
            changeDraft({ avatar: '' });
        }

        setLoading(false);
    }, 2000), []);

    const onContactChange = (event: any) => {
        setLoading(true);

        const { value } = event.target;
        changeDraft({ nickname: value });

        changeAvatar(value);
    };

    const makeRequest = useLoader(setGenerating);

    const addContact = () => makeRequest(async () => {
        const generatedContact = await makeContact(draft.nickname);
        const newContact = {
            ...draft,
            ...generatedContact,
        }

        changeDraft({ nickname: '', avatar: '' });
        appendContact(newContact);
    });

    const avatarSize = 96;

    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
                sx={{ mb: 2 }}
                size="small"
                value={draft.nickname}
                disabled={generating}
                placeholder="Nickname"
                inputProps={{ pattern: '[a-zA-Z0-9_-]*' }}
                required
                onChange={onContactChange}
            />

            <Avatar
                src={loading ? undefined : draft.avatar}
                sx={{ width: avatarSize, height: avatarSize }}
                alt="draft avatar"
            >
                {loading && (<CircularProgress />)}
            </Avatar>

            <Button
                sx={{ mt: 2 }}
                variant="contained"
                disabled={!draft.nickname || loading || generating}
                onClick={addContact}
            >
                Create User
            </Button>
        </FormControl>
    );
}

export default ContactForm;
