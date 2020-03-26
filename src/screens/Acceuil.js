import React from "react";
import yogiste from "../assets/pictures/yogiste_header.jpg";
import "./screensCss/Acceuil.css";

const Acceuil = () => {
  return (
    <div>
      <div className="acceuilContainer">
        <img src={yogiste} id="imgYogiste" alt="yogiste" />
        <div className="citationAcceuil">
          <h1 title="citationyogaCarlGustavJung">
            "On ne peut aller au delà de soi-même. On ne peut que progresser à
            l'intérieur de soi."
          </h1>
          <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Carl Gustav Jung</h1>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
