import React from "react";
import "./screensCss/Cours_Tarifs.css";

const Cours_Tarifs = () => {
  return (
    <div className="coursTarifsContainer">
      <div className="horairesContainer">
        <h1 title=" horaires des cours de yoga">Horaires:</h1>
        <div className="horaires"></div>
        <p>
          <h2 title="cours de yoga le lundi">Lundi</h2> 15H30 - 17H00 (Pratique
          douce)<br></br> & <br></br>17h30 - 19h30
        </p>
        <p>
          <h2 title="cours de yoga le mardi">Mardi</h2>
          9h30 - 11h30<br></br> & <br></br> 18h30 - 20h30
        </p>
        <p>
          <h2 title="cours de yoga le jeudi">Jeudi</h2>
          9h30 - 11h30
        </p>{" "}
        <br></br>
        <p>Il n’y a pas de cours durant les congés scolaires.</p>
        <p>Inscription possible en cours d'année en fonction des places disponibles</p>
      </div>
      <div className="tarifsContainer">
        <h1 title="tarifs yoga">Tarifs:</h1>
        <br></br>
        <p>
          • La séance d’essai est offerte <br></br>(appeler au préalable pour
          connaître les créneaux disponibles){" "}
        </p>
        <p>
          • Pour une séance hebdomadaire d’1H30 en pratique douce : <br></br>
          Forfait annuel : 360 € <br></br> Règlement possible en 3 chèques à
          l’inscription (soit 120 € par trimestre)
        </p>
        <p> </p>
        <p>
          {" "}
          • Pour une séance hebdomadaire de 2H00 : <br></br>Forfait annuel : 450
          € <br></br>Règlement possible en 3 chèques à l’inscription (soit 150 €
          par trimestre) <br></br>{" "}
          <p>
            • Séance supplémentaire (dans le cadre d’un forfait annuel) : 10 €{" "}
            <br></br>
            <p>• Pour une séance hors forfait : 15€</p>
            <p>• Adhésion annuelle obligatoire : 15€</p>
          </p>
        </p>
        <p>
          Les séances non effectuées ne sont pas remboursées.<br></br>
          Néanmoins, en cas d'absence à un cours, il vous est possible de le
          rattraper sur un autre horaire et ce jusqu’à la fin de l’année en cours,
          dans la limite des places disponibles.
        </p>
      </div>
    </div>
  );
};

export default Cours_Tarifs;
