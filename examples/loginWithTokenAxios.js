const loginWithToken = async (token) => {
    const response = await axios.post('http://localhost:3000/api/auth/login-token', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};
