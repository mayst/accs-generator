import { useContext, useState } from 'react';
import { Box } from '@mui/material';
import ContactsContext from '@/store/ContactsContext';
import ContactListItem from './ContactListItem';
import RemoveModal from './RemoveModal';

function ContactList() {
    const { contacts, removeContact } = useContext(ContactsContext);
    const [isOpenModal, setOpenModal] = useState(false);
    const [selectedContactIndex, setSelectedContactIndex] = useState<null | number>(null);

    const openModal = (index: number) => {
        setSelectedContactIndex(index);
        setOpenModal(true);
    };
    const closeModal = () => setOpenModal(false);

    const removeItem = (index: number) => {
        removeContact(index);
        closeModal();
    }

    return (
        <Box>
            {
                contacts.map((contact, i) => (
                    <ContactListItem
                        contact={contact}
                        key={`${contact.firstName}-${contact.lastName}`}
                        onClick={() => openModal(i)}
                    />
                ))
            }

            <RemoveModal
                open={isOpenModal}
                closeModal={closeModal}
                removeItem={() => removeItem(selectedContactIndex!)}
            />
        </Box>
    );
}

export default ContactList;
