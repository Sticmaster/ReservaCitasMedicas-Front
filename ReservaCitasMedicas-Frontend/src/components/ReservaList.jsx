// ReservaList.js
import React, { useState } from 'react';
import ReservaForm from './ReservaForm';
import { Button, Modal } from 'react-bootstrap';

const ReservaList = ({ reservas }) => {
  const [reservaFormVisible, setReservaFormVisible] = useState(false);

  const handleReservationAdded = (newReservation) => {
    // Actualiza la lista de reservas o realiza acciones necesarias
  };

  return (
    <div>
      {/* ... Código para mostrar la lista de reservas ... */}

      <Button variant="primary" onClick={() => setReservaFormVisible(true)}>
        Añadir Reserva
      </Button>

      <Modal show={reservaFormVisible} onHide={() => setReservaFormVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservaForm onReservationAdded={handleReservationAdded} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReservaList;
