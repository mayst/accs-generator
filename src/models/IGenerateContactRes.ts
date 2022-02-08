interface IGenerateContactRes {
    results: Array<{
        email: string;
        name: {
            title: string;
            first: string;
            last: string;
        }
    }>;
}

export default IGenerateContactRes;
