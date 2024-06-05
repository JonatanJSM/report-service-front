import axios from 'axios';

const baseURL = "http://192.168.1.223:8000/"

export const httpClient = axios.create({
    baseURL,
});
