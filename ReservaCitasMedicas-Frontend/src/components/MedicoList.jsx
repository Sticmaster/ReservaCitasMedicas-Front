// MedicoList.js
import React, { useState } from 'react';
import MedicoForm from './MedicoForm';
import { Button, Modal } from 'react-bootstrap';

const MedicoList = ({ medicos }) => {
  const [medicoFormVisible, setMedicoFormVisible] = useState(false);

  const handleDoctorAdded = (newDoctor) => {
    // Actualiza la lista de médicos o realiza acciones necesarias
  };

  return (
    <div>
      {/* ... Código para mostrar la lista de médicos ... */}

      <Button variant="primary" onClick={() => setMedicoFormVisible(true)}>
        Añadir Médico
      </Button>

      <Modal show={medicoFormVisible} onHide={() => setMedicoFormVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MedicoForm onDoctorAdded={handleDoctorAdded} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MedicoList;
