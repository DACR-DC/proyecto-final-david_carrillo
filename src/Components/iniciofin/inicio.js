import React from "react";
import './inicio.css';

function Inicio({ logo1, alt, parrafo, logo2, logo3 }) {
  return (
    <div>
      <div className='perfilimg'>
        <img src={logo1} alt={alt} />
        <img src={logo2} alt={alt}  />
        <img src={logo3} alt={alt}  />
      </div>
      <p>{parrafo}</p>
    </div>
  );
}

export default Inicio;
