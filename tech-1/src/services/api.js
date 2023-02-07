import axios from 'axios';

const api = axios.create({
    baseURL: 'https://63e1667b59bb472a7437af89.mockapi.io/'
});

export default api;