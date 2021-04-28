import axios from 'axios';

const api = axios.create({
  baseURL: 'http://51.91.98.164:4005',
});

export default api;
