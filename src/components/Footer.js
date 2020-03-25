import React from "react";
import imglotus from "../assets/pictures/lotus.png";
import "./componentsCss/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <img src={imglotus} id="lotus"  alt="lotusboudha"/>
        <h1>Association Arc-En-Ciel </h1>
      </div>
        <p>
          Copyriht © 2020 - Tous droits reservés - Webmaster: Morgan Leblanc
        </p>
    </div>
  );
};

export default Footer;
