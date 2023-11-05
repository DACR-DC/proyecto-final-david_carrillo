import React, { useState } from 'react';
import './proyectos.css';

function Proyectos({ h1info, parrafo, imglinks, imgalts }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imglinks.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage + imglinks.length - 1) % imglinks.length);
  };

  return (
    <div id={h1info === 'Proyecto 1' ? 'proyecto1' : 'proyecto2'} className="proyecto">
      <h1>{h1info}</h1>
      <img src={imglinks[currentImage]} alt={imgalts[currentImage]} />
      <p className='desc'>{parrafo}</p>

      <div className="image-navigation">
        <button onClick={handlePrevImage}>Anterior</button>
        <button onClick={handleNextImage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Proyectos;