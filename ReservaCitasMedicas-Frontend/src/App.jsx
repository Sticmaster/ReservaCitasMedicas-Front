import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PacienteForm from './components/PacienteForm';
import PacienteList from './components/PacienteList';
import MedicoForm from './components/MedicoForm';
import MedicoList from './components/MedicoList';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Citas Médicas
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/pacientes">
              Pacientes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/medicos">
              Médicos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservas">
              Reservas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes/*" element={<Pacientes />} />
          <Route path="/medicos/*" element={<Medicos />} />
          <Route path="/reservas/*" element={<Reservas />} />
        </Routes>
      </div>
    </Router>
  );
};


const Home = () => {
  return <h2>Bienvenido a Citas Médicas</h2>;
};

const Pacientes = () => {
  return (
    <Routes>
      <Route path="/new" element={<PacienteForm />} />
      <Route path="/" element={<PacienteList />} />
    </Routes>
  );
};

const Medicos = () => {
  return (
    <Routes>
      <Route path="/new" element={<MedicoForm />} />
      <Route path="/" element={<MedicoList />} />
    </Routes>
  );
};

const Reservas = () => {
  return (
    <Routes>
      <Route path="/new" element={<ReservaForm />} />
      <Route path="/" element={<ReservaList />} />
    </Routes>
  );
};


export default App;
