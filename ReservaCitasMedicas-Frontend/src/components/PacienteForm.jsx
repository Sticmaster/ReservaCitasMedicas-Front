// PacienteForm.js
import React, { useState } from 'react';
import { addPatient } from '../services/api';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

const PacienteForm = ({ onPatientAdded }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPatient = await addPatient(formData);
      onPatientAdded(newPatient);
      // Limpiar el formulario después de agregar el paciente
      setFormData({
        nombre: '',
        apellido: '',
        edad: 0,
      });
    } catch (error) {
      console.error('Error al guardar el paciente:', error);
    }
  };

  return (
    <div>
      <BootstrapForm onSubmit={handleSubmit}>
        <BootstrapForm.Group controlId="nombre">
          <BootstrapForm.Label>Nombre</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="apellido">
          <BootstrapForm.Label>Apellido</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="edad">
          <BootstrapForm.Label>Edad</BootstrapForm.Label>
          <BootstrapForm.Control
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
          />
        </BootstrapForm.Group>

        <Button variant="primary" type="submit">
          Añadir Paciente
        </Button>
      </BootstrapForm>
    </div>
  );
};

export default PacienteForm;
