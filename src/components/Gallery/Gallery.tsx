import { FC, useContext } from "react";
import "./Gallery.scss";

// Images
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
import gallery7 from "../../assets/apartments2.jpg";
import gallery8 from "../../assets/apartments6.jpg";
import gallery9 from "../../assets/apartments10.jpg";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

// State
import { LangContext } from "../../state/context/Lang";

export const Gallery: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className="Gallery link-target" id="proyectos">
      <SectionHeading
        heading={
          lang === "es" ? "ver proyectos terminados" : "View completed projects"
        }
      />
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
          <div className="Gallery__item">
            <img src={gallery5} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery6} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery7} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery8} alt="" />
          </div>
          <div className="Gallery__item">
            <img src={gallery9} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
