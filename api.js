import axios from 'axios';

// URL base de tu API en Laravel
const api = axios.create({
  baseURL: 'http://192.168.1.10/api/', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
 
export default api;
