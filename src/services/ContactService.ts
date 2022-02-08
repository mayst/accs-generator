import ApiService from './ApiService';
import IGenerateContactRes from '@/models/IGenerateContactRes';
import LocalStorageService from './LocalStorageService';

class ContactService {
    private apiService = ApiService;
    private localStorageService = LocalStorageService;

    public generateAvatar(nickname: string) {
        return `https://avatars.dicebear.com/api/avataaars/${nickname}.svg`;
    }

    public async generateContact(nickname: string) {
        const { results } = await this.apiService.get<IGenerateContactRes>(`https://randomuser.me/api/?seed=${nickname}&inc=email,name`);

        if (!results.length) {
            throw new Error('Invalid generated contact data');
        }

        const {
            email,
            name: { first, last }
        } = results[0];

        return {
            email,
            firstName: first,
            lastName: last,
        };
    }

    public loadSavedData(key: string) {
        return this.localStorageService.getItem(key);
    }

    public saveData(key: 'draft' | 'contacts', value: any) {
        this.localStorageService.setItem(key, value);
    }
}

export default new ContactService();
