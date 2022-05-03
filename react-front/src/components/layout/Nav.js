// import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
    return (
    <nav>
      <ul className="nav-list holder">
        <li className="nav-item home">
            <NavLink activeClassName= 'activo' exact to ="/">Home</NavLink></li>
        <li className="nav-item nosotros">
          <NavLink activeClassName= 'activo' exact to = '/nosotros'>Nosotros</NavLink>
        </li>
        <li className="nav-item servicios">
          <NavLink activeClassName= 'activo' exact to = "/servicios">Servicios</NavLink>
        </li>
        <li className="nav-item galeria">
          <NavLink activeClassName= 'activo' exact to ="/galeria">Galeria</NavLink>
        </li>
        <li className="nav-item novedades">
          <NavLink activeClassName= 'activo' exact to ="/novedades">Novedades</NavLink>
        </li>
        <li className="nav-item contacto">
          <NavLink activeClassName= 'activo' exact to = '/contacto'>Contacto</NavLink>
        </li>
    </ul>
    </nav>);
}
export default Nav;
