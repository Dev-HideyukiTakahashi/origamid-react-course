import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <h1>Esse é o header</h1>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="/sobre">Sobre</NavLink> |{" "}
      <NavLink to="/login">login</NavLink>
    </nav>
  );
};
