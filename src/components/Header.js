import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>

        <NavLink to="/">
          <img className="header-logo" src="/logo.png" alt="Logo Kasa" />
        </NavLink>

        <ul className="header-links">

          <li className="header-link">
            <NavLink to="/">ACCUEIL</NavLink>
          </li>

          <li className="header-link">
            <NavLink to="/about">À PROPOS</NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Header;
