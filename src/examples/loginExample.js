const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password
        });

        const { token } = response.data;
        
        // Store token in localStorage
        localStorage.setItem('token', token);
        
        // Set axios default headers for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Making authenticated requests
const getProtectedData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/auth/protected', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
