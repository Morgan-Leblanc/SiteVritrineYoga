import React, { useState } from "react";
import DeGasquet from "./DeGasquet";
import YogaVertus from "./YogaVertus";
import Yoga from "./Yoga";
import "./screensCss/Parcours.css";

const Parcours = () => {
  const [deGasquet, setDeGasquet] = useState(false);
  const [yoga, setYoga] = useState(false);
  const [yogaVertus, setYogaVertus] = useState(false);
  const [parcours, setParcours] = useState(false);

  const displayGasquet = () => {
    setDeGasquet(!deGasquet);
    setYoga(false);
    setYogaVertus(false);
    setParcours(false);
  };

  const displayYoga = () => {
    setDeGasquet(false);
    setYoga(!yoga);
    setYogaVertus(false);
    setParcours(false);
  };
  const displayYogaVertus = () => {
    setDeGasquet(false);
    setYoga(false);
    setParcours(false);
    setYogaVertus(!yogaVertus);
  };
  const displayParcours = () => {
    setDeGasquet(false);
    setYoga(false);
    setParcours(!parcours);
    setYogaVertus(false);
  };
  return (
    <div className="parcoursContainer">
      <div className="containerButton">
        <button className="buttonMoreInfos" onClick={() => displayYoga()}>
          {" "}
          Le Hatha Yoga
        </button>
        <button className="buttonMoreInfos" onClick={() => displayYogaVertus()}>
          Les vertus du Yoga{" "}
        </button>
        <button className="buttonMoreInfos" onClick={() => displayGasquet()}>
          La Méthode DeGasquet
        </button>
        <button className="buttonMoreInfos" onClick={() => displayParcours()}>
          Le Parcours de l'Enseignante
        </button>
      </div>
      {parcours ? (
        <div className="parcours">
          <h1>Parcours de l'enseignante</h1>
          <p>
            <p>
              Nathalie LEBLANC découvre le yoga en 1986 à l’âge de
              21ans.
            </p>
            <p>
              En 1993 elle obtient son diplôme d’enseignante de yoga à l’issue
              de 3 années de formation au sein de l’Ecole Internationale du Yoga
              Traditionnel (EIDYT Paris) fondée par Shri Mahesh Ghatradyal,
              maître indien , également fondateur en 1968 de la<br></br>{" "}
              Fédération Française de Hatha Yoga (FFHY)
            </p>

            <p>
              La même année elle obtient un diplôme de relaxologue (formation
              sur trois ans).
            </p>

            <p>
              En 1996 elle intervient au sein de l’EIDYT à PARIS en tant que
              formatrice dans le domaine du Yoga Nidra et de la relaxation.{" "}
            </p>
            <p>
              De 1995 à 2000 elle suit l’enseignement de feu Swami Shantidass,
              prêtre, spécialiste des grandes religions qui vécu 22 ans en Inde.
              <br></br>
              <br></br>Depuis 1998 elle a reçu l’enseignement de divers
              formateurs de l’EFY (Ecole Française de Yoga) et notamment :
            </p>

            <p>
              De 2005 à 2011 celui d’Annemarie Hebeisen, enseignante dans la
              lignée Dürckheim et proche collaboratrice de Blandine Calais
              Germain <br></br> auteure de plusieurs ouvrages dont « Anatomie pour le yoga
              »
            </p>

            <p>
              Depuis 2010 elle suit plus particulièrement l’enseignement
              d’Isabelle Morin-Larbey formatrice dans la lignée de Madras <br></br>
              (Enseignement de Krishnamacharya, yogi du sud de l’Inde et de son
              fils de TKV Desikachar)
            </p>

            <p>
              En 2015 elle obtient la certification « YOGA » DE GASQUET®{" "}
              <br></br>
              Méthode APOR (Approche posturo respiratoire) élaborée par
              Bernadette de Gasquet, médecin, professeur de yoga <br></br>et fondatrice
              de L’Institut DE GASQUET® à Paris.
            </p>

            <p>
              Elle pratique également le Tai Chi Chuan depuis 1990 et étudie
              l’Art de la calligraphie extrême orientale depuis 2008
              <br></br>(calligraphie chinoise et peinture à l’encre ou sumie)
            </p>
          </p>
          <div className="liensExternes">
            <h2>Liens :</h2>
            <ul>
              <li>
                <a
                  href={"https://www.degasquet.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.degasquet.com{" "}
                </a>
              </li>
              <li>
                <a
                  href={"https://lemondeduyoga.org/lassociation-fney/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.info@fney.asso.fr{" "}
                </a>
              </li>
              <li>
                <a
                  href={"https://ecolefrancaisedeyoga.fr/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  www.ecoleyogaparis.fr
                </a>
              </li>
              <li>
                {" "}
                <a
                  href={"https://ffhy.eu/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ff-hatha-yoga.com
                </a>
              </li>
              <li>
                <a
                  href={"https://www.calais-germain.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.calais-germain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {deGasquet ? <DeGasquet /> : null}
      {yoga ? <Yoga /> : null}
      {yogaVertus ? <YogaVertus /> : null}
    </div>
  );
};

export default Parcours;
