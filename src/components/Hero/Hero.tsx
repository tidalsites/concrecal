import { FC } from "react";
import "./Hero.scss";
import bgVideo from "../../assets/bg.mp4";

export const Hero: FC = () => {
  return (
    <section className="Hero">
      <video autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="Hero__content">
        <div className="Hero__content__wrapper">
          <p>Comience con una base sólida</p>
        </div>
      </div>
    </section>
  );
};
