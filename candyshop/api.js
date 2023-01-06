const api = {
    login: async (email, password) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.status !== 200) {
            throw new Error('Unsuccessful login attempt!');
        }

        return res.json();
    },
    register: async (email, username, password, confirmPassword) => {
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password, confirmPassword }),
        });

        if (res.status !== 200) {
            throw new Error('Unsuccessful register attempt!');
        }

        return res.json();
    },
    self: async (token) => {
        if (!token) {
            return null;
        }
        const res = await fetch('/api/self', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.status !== 200) {
            throw new Error('Request failed');
        }

        return res.json();
    },
};

export default api;
