const storage = {
    get: (key) => {
        return localStorage.getItem(key);
    },
    set: (key, value) => {
        localStorage.setItem(key, value);
    },
    exists: (key) => {
        return localStorage.getItem(key) !== null;
    },
    delete: (key) => {
        localStorage.removeItem(key);
    },
};

export default storage;