import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://localhost:3001/', 
  baseURL: 'https://api.gitapps.in/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
