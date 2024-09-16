// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Mock API endpoint

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Providers
export const getProviders = () => api.get('/providers');
export const addProvider = (data) => api.post('/providers', data);

// Employees
export const getEmployees = () => api.get('/employees');
export const addEmployee = (data) => api.post('/employees', data);

// Schedule
export const getSchedule = () => api.get('/schedule');

// Shift Swapping
export const getShiftSwaps = () => api.get('/shift-swaps');
export const requestShiftSwap = (data) => api.post('/shift-swaps', data);

// Time-Off Requests
export const getTimeOffRequests = () => api.get('/time-off-requests');
export const requestTimeOff = (data) => api.post('/time-off-requests', data);

// Reports
export const getReports = () => api.get('/reports');

// Settings
export const getSettings = () => api.get('/settings');
export const updateSettings = (data) => api.put('/settings', data);
