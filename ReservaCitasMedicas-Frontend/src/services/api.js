// api.js
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

// Funciones para pacientes
export const getPatients = async () => {
  const response = await axios.get(`${baseURL}paciente/`);
  return response.data;
};

export const addPatient = async (patient) => {
  const response = await axios.post(`${baseURL}paciente/`, patient);
  return response.data;
};

// Funciones para médicos
export const getDoctors = async () => {
  const response = await axios.get(`${baseURL}medico/`);
  return response.data;
};

export const addDoctor = async (doctor) => {
  const response = await axios.post(`${baseURL}medico/`, doctor);
  return response.data;
};

// Funciones para reservas
export const getReservations = async () => {
  const response = await axios.get(`${baseURL}reserva/`);
  return response.data;
};

export const addReservation = async (reservation) => {
  const response = await axios.post(`${baseURL}reserva/`, reservation);
  return response.data;
};
