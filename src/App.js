import React from 'react';
import './App.css';
import Proyectos from './Components/proyectos/proyectos';
import Inicio from './Components/iniciofin/inicio';
import Sobremi from './Components/sobremi/sobremi';
import Navbar from './Components/navbar/navbar';
import logo from './logo.svg';
import logo2 from './Components/iniciofin/imgs/mongodb.png';
import logo3 from './Components/iniciofin/imgs/nodejs.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import proy1_1 from './Components/proyectos/imgs/proy1.1.png';
import proy1_2 from './Components/proyectos/imgs/proy1.2.png';
import proy1_3 from './Components/proyectos/imgs/proy1.3.png';

import proy2_1 from './Components/proyectos/imgs/proy2.1.png';
import proy2_2 from './Components/proyectos/imgs/proy2.2.png';
import proy2_3 from './Components/proyectos/imgs/proy2.3.png';

import proy3_1 from './Components/proyectos/imgs/proy3.1.png';

import perfil from './Components/sobremi/imgs/unnamed.jpg';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={
              <Inicio
              logo1={logo}
              logo2={logo2} 
              logo3={logo3} 
              alt="imagen de perfil"
              parrafo="Este es el proyecto final del curso de Desarrollo Web, el cual tiene como finalidad que los estudiantes apliquen y demuestren sus habilidades y conocimientos adquiridos durante el curso de Desarrollo Web. El proyecto consiste en el desarrollo de una página web personal, funcionando como un portafolio o CV digital."
              
            />
            } 
          />
          <Route path="/proyectos" element={
            <>
              <Proyectos
                h1info="Proyecto 1"
                imglinks={[proy1_1, proy1_2, proy1_3]}
                imgalts={['Imagen 1', 'Imagen 2', 'Imagen 3']}
                parrafo="Descripción proyecto 1"
              />
              <Proyectos
                h1info="Proyecto 2"
                imglinks={[proy2_1, proy2_2, proy2_3]}
                imgalts={['Imagen 1', 'Imagen 2', 'Imagen 3']}
                parrafo="Para este segundo proyecto se creo un tipo de api para guardar,
                modificar y eliminar usuarios dentro de una base de datos de MongoDB"
              />
              <Proyectos
                h1info="Proyecto 3"
                imglinks={[proy3_1]}
                imgalts={['Imagen 1']}
                parrafo="Se realizo un tipo de publicacion de facebook en donde se puede contar la cantidad de likes y dislikes"
              />
            </>
          } />

          <Route path="/sobremi" element={
            <>
              <Sobremi
                section="Quien soy"
                imgSrc={perfil}
                imgAlt="imagen de mi persona"
                parrafo="Mi nombre es 'David Alejandro Carrillo de la Roca' tengo 21 años, actualmente estudiando ingeniería en sistemas en la universidad
                mariano galvez de guatemala, anteriormente he estudiado en el colegio loyola el grado de primaria
                y para la secundaria y bachillerato estudié en el liceo guatemala."
              />

              <Sobremi
                section="Experiencia"
                h1info="Título 2"
                parrafo="Este año he obtenido diferentes eperiencias en el area de desarrollo web algunos de ellos son MongoDB el cual es una base de datos nosql"
                parrafo2="Tengo experiencia en la utilizacion de emu8086 el cual es un emulador del microprocesador8086 con assembler integrado"
              />


              <Sobremi
                section="Habilidades"
                parrafo="A lo largo de mi carrera universitaria, he adquirido habilidades en diversas áreas como lo son:"
                technicalSkills={['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']}

               
              />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
