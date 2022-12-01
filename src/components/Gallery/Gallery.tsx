import { FC } from "react";
import "./Gallery.scss";

// Images
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Gallery: FC = () => {
  return (
    <section className="Gallery" id="proyectos">
      <SectionHeading heading="ver proyectos terminados" />
      <div className="Gallery__content">
        <div className="Gallery__slider">
          <div className="Gallery__item">
            <img src={gallery1} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery2} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery3} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
