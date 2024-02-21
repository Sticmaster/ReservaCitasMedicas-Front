// PacienteList.js
import React, { useState } from 'react';
import PacienteForm from './PacienteForm';
import { ListGroup } from 'react-bootstrap';

const PacienteList = ({ pacientes }) => {
  const [patients, setPatients] = useState(pacientes || []);

  const handlePatientAdded = (newPatient) => {
    // Actualiza la lista de pacientes o realiza acciones necesarias
    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };

  return (
    <div>
      <PacienteForm onPatientAdded={handlePatientAdded} />

      {patients.length > 0 && (
        <div>
          <h5>Listado de Pacientes:</h5>
          <ListGroup>
            {patients.map((patient) => (
              <ListGroup.Item key={patient.idPaciente}>{`${patient.nombre} ${patient.apellido}`}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default PacienteList;
