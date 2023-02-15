import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import "../screens/screensCss/Contact.css";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Contact = () => {
  const position = [48.3837585449, 2.02235507965];
  return (
    <div className="contactContainer">
      <h1 id="findUs" title="trouver centre yoga proche etampes">
        Nous Trouver:
      </h1>
      <div className="leaflet-container">
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} />
        </Map>
      </div>
      <div className="contactForm">
        <h1 title="contacter centre yoga proche etampes">Nous Contacter:</h1>
        <h2 title="email yoga etampes">
          <IoMdMail id="iconForm" />
          <a id="emailLink" href="MAILTO:yoga_arc-en-ciel@orange.fr">
            yoga_arc-en-ciel@orange.fr
          </a>
        </h2>
        <h2 id="phonecall" title=" numéro de téléphone yoga etampes">
          <IoMdCall id="iconForm" /> 06.85.47.57.64
        </h2>
      </div>
    </div>
  );
};

export default Contact;
