import axios, { AxiosInstance } from 'axios';

const instanceAxios:AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/game/',
    headers: {
        'Content-Type': 'application/json',

    }
});

export default instanceAxios;