import IDraftContact from './IDraftContact';
import Contact from './IContact';

interface IContactsContext {
    draftContact: IDraftContact;
    contactList: Array<Contact>;
}

export default IContactsContext;
