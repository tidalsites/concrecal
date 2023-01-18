import { FC, useContext } from "react";
import { LangContext } from "../../state/context/Lang";
import "./Apartamentos.scss";

// Images
import apt1 from "../../assets/apartments1.jpg";
import apt2 from "../../assets/apartments2.jpg";
import apt3 from "../../assets/apartments3.jpg";
import apt4 from "../../assets/apartments4.jpg";
import apt5 from "../../assets/apartments5.jpg";
import apt6 from "../../assets/apartments6.jpg";
import apt7 from "../../assets/apartments7.jpg";
import apt8 from "../../assets/apartments8.jpg";
import apt9 from "../../assets/apartments9.jpg";
import apt10 from "../../assets/apartments10.jpg";
import apt11 from "../../assets/apartments11.jpg";
import apt12 from "../../assets/apartments12.jpg";

export const Apartamentos: FC = () => {
  const { lang } = useContext(LangContext);
  const apartamentos = [
    apt1,
    apt2,
    apt3,
    apt4,
    apt5,
    apt6,
    apt7,
    apt8,
    apt9,
    apt10,
    apt11,
    apt12,
  ];
  return (
    <section className="Apartamentos">
      <div className="Apartamentos__title">
        <h2>
          {lang === "es"
            ? "También construimos apartamentos"
            : "We also build apartments"}
        </h2>
      </div>
      <div className="Apartamentos__content">
        {(() => {
          return apartamentos.map((apt) => <img src={apt} alt=""></img>);
        })()}
      </div>
    </section>
  );
};
