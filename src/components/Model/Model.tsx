import { FC } from "react";
import "./Model.scss";

// Images
import tipoA from "../../assets/tipo-a.jpg";
import tipoB from "../../assets/tipo-b.jpg";
import tipoC from "../../assets/tipo-c.jpg";
import tipoD from "../../assets/tipo-d.jpg";

interface IModelProps {
  nombre: string;
  habitaciones: number;
  banos: number;
  metros: number;
  niveles: number;
  img: "a" | "b" | "c" | "d";
}

export const Model: FC<IModelProps> = ({
  nombre,
  habitaciones,
  banos,
  metros,
  niveles,
  img,
}) => {
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
          <span>{habitaciones} Habitaciones</span>
          <span>{banos} Banos</span>
          <span>
            {metros} Mt<sup>2</sup>
          </span>
          <span>{niveles} Niveles</span>
        </div>
      </div>
    </div>
  );
};
