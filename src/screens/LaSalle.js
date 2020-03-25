import React from "react";
import salle2 from "../assets/pictures/salle2.jpg";
import salle3 from "../assets/pictures/salle3.jpg";
import salle4 from "../assets/pictures/salle4.jpg";
import salle5 from "../assets/pictures/salle5.jpg";
import salle6 from "../assets/pictures/salle6.jpg";
import "../screens/screensCss/LaSalle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LaSalle = () => {
  return (
    <div className="placestuffContainer">
      <div className="salleContainer">
        <h1 id="titlesalle">La Salle</h1>
        <p>
          Le lieu de pratique est un espace privé situé à 12km au sud d’Etampes
          dans la Vallée de la Chalouette.
          <p>
            {" "}
            Dans un ancien moulin, au calme et entouré de verdure, le cadre est
            privilégié et insite à la quiétude et à l’intériorisation.
          </p>{" "}
          <p>
            La salle est lumineuse, accueillante et bien chauffée.
            <p>
              Pour votre confort le nombre de participants est limité à 11 par
              séance.
            </p>
          </p>
        </p>
      </div>

      <div className="carrousel">
        <Carousel autoPlay showArrows infiniteLoop stopOnHover width="100%">
          <div>
            <img src={salle2} alt="imagesalle" />
          </div>
          <div>
            <img src={salle3}  alt="imagesalle"/>
          </div>
          <div>
            <img src={salle4}  alt="imagesalle"/>
          </div>
          <div>
            <img src={salle5} alt="imagesalle" />
          </div>
          <div>
            <img src={salle6}  alt="imagesalle"/>
          </div>
        </Carousel>
      </div>
      <div className="stuffContainer">
        <h1 id="titlesalle">L’équipement</h1>

        <p>
          {" "}
          <p>
            Du matériel est à disposition sur place afin de pouvoir aménager vos
            postures (sangles, briques en liège, zafus, galettes de genoux à
            mémoire de forme…){" "}
          </p>
          <p>
            Pour une question d’hygiène, il est demandé d’apporter son propre
            tapis de pratique.
          </p>
          <p>Quelques tapis restent à disposition en cas d’oubli ponctuel.</p>
          <p>
            {" "}
            Prévoir une tenue souple et confortable et un plaid pour la
            relaxation.
          </p>
        </p>
      </div>
    </div>
  );
};

export default LaSalle;
