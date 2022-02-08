import { useContext, useState } from 'react';
import { Avatar, Button, CircularProgress, FormControl, TextField } from '@mui/material';
import { DraftContext } from '@/store';
import useChangeAvatar from '@/hooks/useChangeAvatar';
import useAddContact from '@/hooks/useAddContact';

function ContactForm() {
    const { draft, changeDraft } = useContext(DraftContext);

    const [loading, setLoading] = useState(false);

    const changeAvatar = useChangeAvatar(changeDraft, setLoading);

    const onContactChange = (event: any) => {
        setLoading(true);

        const { value } = event.target;
        changeDraft({ nickname: value });

        changeAvatar(value);
    };

    const { generating, addContact } = useAddContact(draft, changeDraft);

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
