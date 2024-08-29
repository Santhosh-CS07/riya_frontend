import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://localhost:5000/', 
  baseURL: 'http://bharatboook.com:5000/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
