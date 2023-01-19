import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <header>
      <nav>

        <NavLink to="/">
          <img className="header-logo" src={Logo} alt="Logo Kasa" />
        </NavLink>

        <ul className="header-links">

          <li className="header-link">
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li className="header-link">
            <NavLink to="/about">À propos</NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Header;
