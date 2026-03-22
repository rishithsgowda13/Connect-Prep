export const authAPI = {
    login: async (email, password, type) => {
        // This is a placeholder since AuthContext has its own mock logic for '1' and '2'.
        // If we want real(er) mock behavior:
        if (email && password) {
            return {
                _id: 'mock-id',
                name: 'Mock User',
                email: email,
                role: type || 'student',
                token: 'mock-jwt-token'
            };
        }
        throw new Error('Invalid credentials');
    },
    register: async (userData) => {
        return {
            ...userData,
            _id: 'mock-new-id',
            token: 'mock-jwt-token'
        };
    },
    getMe: async () => {
        const storedUser = localStorage.getItem('cp_user');
        return storedUser ? JSON.parse(storedUser) : null;
    }
};
