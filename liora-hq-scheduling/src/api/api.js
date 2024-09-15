import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.liora-hq.com', // Replace with actual API URL
});

export const addProvider = (provider) => api.post('/providers', provider);
export const addEmployee = (employee) => api.post('/employees', employee);
export const getProviders = () => api.get('/providers');
export const getEmployees = () => api.get('/employees');
export const setSettings = (settings) => api.post('/settings', settings);

export default api;
