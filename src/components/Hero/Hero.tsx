import { FC, useContext } from "react";
import "./Hero.scss";
import bgVideo from "../../assets/bg.mp4";

// State
import { LangContext } from "../../state/context/Lang";

export const Hero: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className="Hero">
      {/* <video autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <div className="Hero__content">
        <div className="Hero__content__wrapper">
          <p>
            {lang === "es"
              ? "Comience con una base sólida"
              : "Start with a solid foundation"}
          </p>
        </div>
      </div>
    </section>
  );
};
