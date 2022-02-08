import React, { useReducer, useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import {
    DraftContext,
    defaultDraft,
    SidebarContext,
    defaultSidebar,
    ContactsContext,
    defaultContacts,
    contactsReducer,
    initContacts,
} from '@/store';
import { Sidebar, Content } from '@/components';
import IDraftContact from '@/models/IDraftContact';
import IContact from "@/models/IContact";

function App() {
    const [draft, setDraft] = useState(defaultDraft);
    const [contacts, dispatchContacts] = useReducer(contactsReducer, defaultContacts, initContacts);
    const [open, setOpen] = useState(defaultSidebar);

    const changeDraft = (value: Partial<IDraftContact>) => setDraft((prev) => ({ ...prev, ...value }));

    const removeContact = (index: number) => dispatchContacts({ type: 'removeContact', payload: index });
    const appendContact = (contact: IContact) => dispatchContacts({ type: 'appendContact', payload: contact });

    return (
        <Box className="App" sx={{ display: 'flex' }}>
            <ContactsContext.Provider value={{ contacts, removeContact, appendContact }}>
                <DraftContext.Provider value={{ draft, changeDraft }}>
                    <SidebarContext.Provider value={{ open, setOpen }}>
                        <Sidebar />

                        <Content />
                    </SidebarContext.Provider>
                </DraftContext.Provider>
            </ContactsContext.Provider>
        </Box>
    );
}

export default App;
