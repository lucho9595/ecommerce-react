// En algún lugar donde sea accesible para otros componentes
export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};
