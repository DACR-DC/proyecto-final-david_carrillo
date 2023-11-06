import React from "react";
import "./contacto.css";

function Contacto({ correo, telefono, direccion }) {
  return (
    <div className="contacto-container">
      <h2>Información de Contacto</h2>
      <p>Correo: {correo}</p>
      <p>Teléfono: {telefono}</p>
      <p>Dirección: {direccion}</p>
    </div>
  );
}

export default Contacto;