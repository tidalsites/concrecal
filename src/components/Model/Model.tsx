import { FC } from "react";
import "./Model.scss";

// Images
import modelImg from "../../assets/proyecto-uno.jpg";

// Icons
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

// Libraries
import { useSwiper } from "swiper/react";

interface IModelProps {
  nombre: string;
  habitaciones: number;
  banos: number;
  metros: number;
  niveles: number;
}

export const Model: FC<IModelProps> = ({
  nombre,
  habitaciones,
  banos,
  metros,
  niveles,
}) => {
  //   const swiper = useSwiper();

  return (
    <div className="model">
      <div className="model__top">
        {/* <button onClick={() => swiper.slidePrev()}>
          <ArrowBackIos />
        </button> */}
        <span className="model__title">{nombre}</span>
        {/* <button onClick={() => swiper.slideNext()}>
          <ArrowForwardIos />
        </button> */}
      </div>

      <div className="model__content">
        <img src={modelImg} alt="" />
        <div className="model__info">
          <span>{habitaciones} Habitaciones</span>
          <span>{banos} Banos</span>
          <span>
            {metros} M<sup>2</sup>
          </span>
          <span>{niveles} Niveles</span>
        </div>
      </div>
    </div>
  );
};
