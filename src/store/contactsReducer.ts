import ContactService from '@/services/ContactService';

export function initContacts(defaultContacts) {
    const savedContacts = ContactService.loadSavedData('contacts');
    return savedContacts || defaultContacts;
}

export function contactsReducer(state, action) {
    switch (action.type) {
        case 'removeContact':
            const filteredList = state.filter((contact, contactIndex) => contactIndex !== action.payload);
            ContactService.saveData('contacts', filteredList);

            return filteredList;
        case 'appendContact':
            const newList = [...state, action.payload];
            ContactService.saveData('contacts', newList);

            return newList;
        default:
            throw new Error('Unknown contacts action type');
    }
}
