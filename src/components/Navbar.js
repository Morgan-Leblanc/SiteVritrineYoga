import React from "react";
import { Link } from "react-router-dom";
import "./componentsCss/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link className="link" to="/">
        Accueil
      </Link>
      <Link className="link" to="/cours_tarifs">
        Horaires & Tarifs
      </Link>
      <Link className="link" to="/lasalle">
        La Salle
      </Link>
      <Link className="link" to="/parcours">
        Parcours
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
