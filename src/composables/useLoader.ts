const useLoader = (setLoader: (value: boolean) => any) => async (fn: () => Promise<any> | any) => {
    setLoader(true);

    try {
        await fn();
    } catch (e) {
        throw e;
    } finally {
        setLoader(false);
    }
}

export default useLoader;
