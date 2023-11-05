import React from "react";
import './sobremi.css'

function Sobremi({ section, habilidad1, parrafo, habilidad2, parrafo2, imgSrc, imgAlt, technicalSkills }) {
  return (
    <div className="containerprincipal">
      <h1>{section}</h1>

      {section === "Quien soy" && (
        <div className="top-container">
          {imgSrc && <img src={imgSrc} alt={imgAlt} />}
          <p>{parrafo}</p>
        </div>
      )}

      {section === "Experiencia" && (
        <div className="middle-container">
          <p>{parrafo}</p>
          <p>{parrafo2}</p>
        </div>
      )}

      {section === "Habilidades" && (
        <div className="bottom-container">
          <h2>{habilidad1}</h2>
          <p>{parrafo}</p>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3>{habilidad2}</h3>
          
        </div>
      )}
    </div>
  );
}

export default Sobremi;

