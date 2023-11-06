import React, { useState } from 'react';
import './proyectos.css';

function Proyectos({ idinfo, parrafo, imglinks, imgalts }) {
  const [imgactual, setimgactual] = useState(0);

  const siguientimagen = () => {
    setimgactual((prevImage) => (prevImage + 1) % imglinks.length);
  };

  const imagenanterior = () => {
    setimgactual((prevImage) => (prevImage + imglinks.length - 1) % imglinks.length);
  };

  return (
    <div id={idinfo === 'Proyecto 1' ? 'proyecto1' : 'proyecto2'} className="proyecto">
      <h1>{idinfo}</h1>
      <img src={imglinks[imgactual]} alt={imgalts[imgactual]} />
      <p className='desc'>{parrafo}</p>

      <div className="image-navigation">
        <button onClick={imagenanterior}>Anterior</button>
        <button onClick={siguientimagen}>Siguiente</button>
      </div>
    </div>
  );
}

export default Proyectos;