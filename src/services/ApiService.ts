import axios from 'axios';

class ApiService {
    axiosInstance = axios.create({ timeout: 10000 });

    constructor() {
        this.errorInterceptor();
    }

    async get<T>(reqPath: string, params: any = {}) {
        const { data } = await this.axiosInstance.request<T>({ url: reqPath, ...params });
        return data;
    }

    errorInterceptor() {
        this.axiosInstance.interceptors.response.use( (response) => response, (error) => {
            return Promise.reject(error?.message || 'Something went wrong');
        });
    }
}

export default new ApiService();
