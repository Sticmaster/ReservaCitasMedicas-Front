// ReservaForm.js
import React, { useState } from 'react';
import Form from './Form';
import { addReservation } from '../services/api';

const ReservaForm = ({ onReservationAdded }) => {
  const handleSubmit = async (formData) => {
    try {
      const newReservation = await addReservation(formData);
      onReservationAdded(newReservation);
      // Puedes agregar lógica adicional después de agregar la reserva, como limpiar el formulario.
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
    }
  };

  return (
    <div>
      <h3>Agregar Reserva</h3>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default ReservaForm;
