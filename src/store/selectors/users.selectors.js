export const getUsers = (states) => states.users.users;
export const getCurrentUser = (states) => states.users.currentUser;

export const getUserByPasword = (password) => {
    return (states) => states.users.users.find(u => u.password === password)
}