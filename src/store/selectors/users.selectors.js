export const getUsers = (states) => states.users.users;
export const getCurrentUser = (states) => states.users.currentUser?.user;

export const getUserByPassword = (password) => {
    return (states) => states.users.users.find(u => u.password === password)
}