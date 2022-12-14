import { FC, useContext } from "react";
import "./Hero.scss";
import wordmark from "../../assets/wordmark.svg";

// State
import { LangContext } from "../../state/context/Lang";

export const Hero: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className="Hero">
      <div className="Hero__content">
        <div className="Hero__content__wrapper">
          <img src={wordmark} alt="" />
        </div>
      </div>
    </section>
  );
};
