import React from "react";
import "./screensCss/Cours_Tarifs.css";

const Cours_Tarifs = () => {
  return (
    <div className="coursTarifsContainer">
      <div className="horairesContainer">
        <h1>Horaires:</h1>
        <div className="horaires"></div>
        <p>
          <h2>Lundi</h2> 15H30 - 17H00 (Pratique douce) & 17h30 - 19h30
        </p>
        <p>
          <h2>Mardi</h2>
          9h30 - 11h30 & 18h30 - 20h30
        </p>
        <p>
          <h2>Jeudi</h2>
          9h30 - 11h30
        </p>
      </div>
      <div className="tarifsContainer">
        <h1>Tarifs:</h1>
        <p>
          • La séance d’essai est offerte <br></br>(appeler au préalable pour
          connaître les créneaux disponibles){" "}
        </p>
        <p>
          • Pour une séance hebdomadaire d’1H30 en pratique douce : <br></br>
          Forfait annuel : 345 € <br></br> Règlement possible en 3 chèques à
          l’inscription (soit 115 € par trimestre)
        </p>
        <p> </p>
        <p>
          {" "}
          • Pour une séance hebdomadaire de 2H00 : <br></br>Forfait annuel : 435
          € <br></br>Règlement possible en 3 chèques à l’inscription (soit 145 €
          par trimestre) <br></br>{" "}
          <p>
            • Séance supplémentaire (dans le cadre d’un forfait annuel) : 10 €{" "}
            <br></br>
            <p>• Pour une séance hors forfait : 15€</p>
          </p>
        </p>
        <p></p>
        <p>
          {" "}
          • Adhésion obligatoire à l’association : 15€ (à régler à
          l’inscription)
        </p>
        <p>
          {" "}
          • Le tarif est forfaitaire pour environ 33 séances par année scolaire.
          <br></br>
          (Soit 10,45€ la séance d’1H30 & 13,18€ la séance de 2 heures)
        </p>
        <p>
          Les séances non effectuées ne sont pas remboursées.<br></br>
          Néanmoins, en cas d'absence à un cours, il vous est possible de le
          rattraper sur un autre horaire et ce jusqu’à la fin de l’année en cours,
          dans la limite des places disponibles.
        </p>
        <p></p>
        <p>
          Il est possible de s’inscrire en cours d’année en fonction des places
          disponibles.
        </p>
        <p>Il n’y a pas de cours durant les congés scolaires.</p>
      </div>
    </div>
  );
};

export default Cours_Tarifs;
