// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form inputs based on your models */}
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name="nombre" onChange={handleChange} />

      <label htmlFor="apellido">Apellido:</label>
      <input type="text" name="apellido" onChange={handleChange} />

      {/* ... other fields */}

      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
