// Create a new instance of Axios
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 3000, // Adjust the timeout as needed
});

// Add a request interceptor to include the JWT token in the request headers
instance.interceptors.request.use(
    (config) => {
        // Retrieve the JWT token from where it's stored (e.g., local storage, cookies, Vuex)
        const token = localStorage.getItem('access_token');

        // If a token is available, set it in the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
