import React, { useState } from "react";
import DeGasquet from "./DeGasquet";
import YogaVertus from "./YogaVertus";
import Yoga from "./Yoga";
import "./screensCss/Parcours.css";

const Parcours = () => {
  const [deGasquet, setDeGasquet] = useState(false);
  const [yoga, setYoga] = useState(false);
  const [yogaVertus, setYogaVertus] = useState(false);

  const displayGasquet = () => {
    setDeGasquet(!deGasquet);
    setYoga(false);
    setYogaVertus(false);
  };

  const displayYoga = () => {
    setDeGasquet(false);
    setYoga(!yoga);
    setYogaVertus(false);
  };
  const displayYogaVertus = () => {
    setDeGasquet(false);
    setYoga(false);
    setYogaVertus(!yogaVertus);
  };
  return (
    <div className="parcoursContainer">
      <div className="parcours">
        <h1>Parcours de l'enseignante</h1>
        <p>
          En 1990, elle débute une formation de professeur à l’EIDYT Paris
          (École Internationale du Yoga Traditionnel) Shri Mahesh Ghatradyal,
          maître indien, créateur de cette école a également fondé en 1968 la
          Fédération Française de Hatha Yoga.
        </p>
        <p>
          Il est l’auteur de plusieurs ouvrages sur le yoga dont « Yoga et
          symbolisme », « Naître en yoga », « Le souffle Parole de vie »…{" "}
        </p>
        <p>
          {" "}
          Elle commence à enseigner le yoga en tant que professeur stagiaire
          sous forme de cours collectifs en 1992. <p />
          <p>
            En 1993 elle obtient son diplôme d’enseignante de yoga à l’issue de
            3 années de formation sanctionnées par un mémoire.
          </p>
          <p>
            Parallèlement elle obtient cette même année un diplôme de
            relaxologue (formation sur trois ans).
          </p>
          <p>
            En 1996 elle intervient au sein de l’EIDYT à PARIS en tant que
            formatrice dans le domaine du Yoga Nidra et de la relaxation.{" "}
          </p>
          <p>
            Elle a le privilège de suivre entre 1995 et 2000 l’enseignement de
            feu Swami Shantidass, prêtre, spécialiste des grandes religions qui
            a vécu 22 ans en Inde.
          </p>
          <p>
            Depuis 1998 elle suit une formation continue auprès de la FNEY Paris
            (Fédération Nationale des Enseignants de Yoga)
          </p>
          <p>
            De 2005 à 2011 elle suit l’enseignement d’Annemarie Hebeisen
            formatrice au sein de l’EFY (Ecole Française de Yoga) à Paris.
          </p>
          <p>
            Annemarie enseigne dans la lignée de yoga K.G Dürckheim (philosophe
            allemand et maitre Zen) et fût une proche collaboratrice de Blandine
            Calais Germain auteure de plusieurs livres sur l’anatomie et le
            mouvement et notamment « Anatomie pour le yoga »
          </p>
          <p>
            Depuis 2010 elle suit plus particulièrement l’enseignement
            d’Isabelle Morin-Larbey, formatrice au sein de l’EFY Paris et
            enseignant dans la lignée de Madras (Enseignement de
            Krishnamacharya, yogi du sud de l’Inde et de son fils de TKV
            Desikachar)
          </p>
          <p>En 2015 Nathalie obtient la certification « YOGA » DE GASQUET® </p>
          <p>
            Méthode APOR (Approche posturo respiratoire) du docteur Bernadette
            de Gasquet. Et continue à suivre régulièrement des formations au
            sein de L’Institut DE GASQUET® à Paris.
          </p>
          <p>
            En parallèle elle pratique le Tai Chi Chuan depuis 1990, et étudie
            l’Art de la calligraphie extrême orientale depuis 2008.
            (calligraphie chinoise et peinture à l’encre ou sumie)
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
      <div className="containerButton">
        <button className="buttonMoreInfos" onClick={() => displayGasquet()}>
          -La Méthode DeGasquet-
        </button>
        <button className="buttonMoreInfos" onClick={() => displayYogaVertus()}>
          -Les vertus du Yoga-{" "}
        </button>
        <button className="buttonMoreInfos" onClick={() => displayYoga()}>
          {" "}
          -Le Hatha Yoga-
        </button>
      </div>
      {deGasquet ? <DeGasquet /> : null}
      {yoga ? <Yoga /> : null}
      {yogaVertus ? <YogaVertus /> : null}
    </div>
  );
};

export default Parcours;
