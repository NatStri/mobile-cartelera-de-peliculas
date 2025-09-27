import axios from "axios";

const BASE_URL = "https://api.tvmaze.com/";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

export default api;