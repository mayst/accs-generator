class LocalStorageService {
    getItem(key: string) {
        const item = localStorage.getItem(key);
        return item && JSON.parse(item);
    }

    setItem(key: string, value: any) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

export default new LocalStorageService();
