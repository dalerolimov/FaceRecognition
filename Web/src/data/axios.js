import axios from 'axios';

const baseURL = 'http://192.168.108.46:5050/api';
const token = JSON.parse(localStorage.getItem('jwtToken'));

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token?.jwtToken}`,
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
});

export default api;
