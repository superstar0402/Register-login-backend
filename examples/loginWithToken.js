const loginWithToken = async (token) => {
    const response = await fetch('http://localhost:3000/api/auth/login-token', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
};
