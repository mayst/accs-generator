import React from 'react';
import IContact from '@/models/IContact';

export const defaultContacts: Array<IContact> = [];

const ContactsContext = React.createContext({
    contacts: defaultContacts,
    removeContact: (index: number) => {},
    appendContact: (contact: IContact) => {},
});

export default ContactsContext;
