import { useContext } from 'react';
import { Box } from '@mui/material';
import DraftContext from '@/store/DraftContext';
import { Draft, ContactList } from './components';

function Index() {
    const { draft } = useContext(DraftContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            {draft.nickname && <Draft draft={draft} />}

            <ContactList />
        </Box>
    );
}

export default Index;
