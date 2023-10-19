import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth?.access_token}`,
        },
        withCredentials: true,
    });

    const refresh = async () => {
        const response = await http.post('/api/auth/refresh', { withCredentials: true });

        console.log(response.data.message);

        setAuth({
            access_token: response.data.access_token,
            role: 'USER',
        });
    };

    return refresh;
};

export default useRefreshToken;
