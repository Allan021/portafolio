import React from "react";
import { NavLink } from "react-router-dom";
const seccionesMenu = [
  {
    id: 1,
    text: "Inicio",
    direccion: "inicio",
  },
  {
    id: 2,
    text: "Acerca",
    direccion: "acerca",
  },
  {
    id: 3,
    text: "Servicios",
    direccion: "servicios",
  },
  {
    id: 4,
    text: "Portafolio",
    direccion: "portafolio",
  },
  {
    id: 5,
    text: "Testimonios",
    direccion: "testimonios",
  },

  {
    id: 6,
    text: "Contacto",
    direccion: "contacto",
  },
];

const Menu = ({ classActive }) => {
  return (
    <ul className={`navbar ${classActive}`}>
      {seccionesMenu.map((el) => (
        <li key={el.id}>
          <NavLink to={el.direccion} activeClassName="active">
            {" "}
            {el.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
