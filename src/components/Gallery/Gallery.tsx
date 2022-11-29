import { FC } from "react";
import "./Gallery.scss";

// Images
import galleryImg from "../../assets/proyecto-uno.jpg";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Gallery: FC = () => {
  return (
    <section className="Gallery" id="proyectos">
      <SectionHeading heading="Proyectos completados" />
      <div className="Gallery__content">
        <div className="Gallery__slider">
          <div className="Gallery__item">
            <img src={galleryImg} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={galleryImg} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={galleryImg} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={galleryImg} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={galleryImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
