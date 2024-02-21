// MedicoForm.js
import React, { useState } from 'react';
import Form from './Form';
import { addDoctor } from '../services/api';

const MedicoForm = ({ onDoctorAdded }) => {
  const handleSubmit = async (formData) => {
    try {
      const newDoctor = await addDoctor(formData);
      onDoctorAdded(newDoctor);
      // Puedes agregar lógica adicional después de agregar al médico, como limpiar el formulario.
    } catch (error) {
      console.error('Error al guardar el médico:', error);
    }
  };

  return (
    <div>
      <h3>Agregar Médico</h3>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default MedicoForm;
