import { FC, useContext } from "react";
import "./Model.scss";

// Images
import tipoA from "../../assets/tipo-a.jpg";
import tipoB from "../../assets/tipo-b.jpg";
import tipoC from "../../assets/tipo-c.jpg";
import tipoD from "../../assets/tipo-d.jpg";
import apt from "../../assets/apartments5.jpg";

// State
import { LangContext } from "../../state/context/Lang";

interface IModelProps {
  nombre: string;
  habitaciones: number | string;
  banos: number | string;
  metros: number | string;
  niveles: number | string;
  img: "a" | "b" | "c" | "d" | "apt";
}

export const Model: FC<IModelProps> = ({
  nombre,
  habitaciones,
  banos,
  metros,
  niveles,
  img,
}) => {
  const { lang } = useContext(LangContext);

  const getImage = () => {
    switch (img) {
      case "a":
        return tipoA;
      case "b":
        return tipoB;
      case "c":
        return tipoC;
      case "d":
        return tipoD;
      case "apt":
        return apt;
      default:
        return tipoA;
    }
  };

  const modelImage = getImage();

  return (
    <div className="model">
      <div className="model__top">
        <span className="model__title">{nombre}</span>
      </div>

      <div className="model__content">
        <div className="model__content__img">
          <img src={modelImage} alt="" />
        </div>

        <div className="model__info">
          <span>
            {habitaciones} {lang === "es" ? "Habitaciones" : "Bedrooms"}
          </span>
          <span>
            {banos} {lang === "es" ? "Banos" : "Bathrooms"}
          </span>
          <span>
            {metros} Mt<sup>2</sup>
          </span>
          <span>
            {niveles} {lang === "es" ? "Niveles" : "Levels"}
          </span>
        </div>
      </div>
    </div>
  );
};
