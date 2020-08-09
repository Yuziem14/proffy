import axios from 'axios';

const { REACT_APP_API_URL: API_URL } = process.env;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
