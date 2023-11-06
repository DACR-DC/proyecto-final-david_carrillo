import React, { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './imgs/logo.png'; 
const links = [
  {
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Sobre Mi',
    href: '/sobremi'
  },
  {
    name: 'Proyectos',
    href: '/proyectos'
  },
  {
    name: 'Contacto',
    href: '/contacto'
  },
];

function Navbar() {
 
  const [activeItem, setActiveItem] = useState('Inicio');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <div className="logo-container"> 
        <img src={logo} alt="Logo" className="logo-image" /> 
      </div>
      <div className="navbar-options">
        {links.map(link => (
          <Link
            key={link.href}
            to={link.href}
            className={activeItem === link.name ? 'active' : ''}
            onClick={() => handleItemClick(link.name)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
