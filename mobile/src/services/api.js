import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.102:3333', // A porta depois dos : é a do backend
})

export default api;