import { FC } from "react";
import "./Models.scss";

export const Models: FC = () => {
  return (
    <section className="Models section">
      <div className="Models__wrapper section-wrapper">
        <h2 className="Models__heading section-heading">Models</h2>
        <p>
          We build as much as you want. From the ground up to the finishes, or
          just the basics. Choose what is best for you.
        </p>
        <div className="Models__content">
          <div className="model">
            <span>Model A</span>
          </div>
          <div className="model">
            <span>Model B</span>
          </div>
          <div className="model">
            <span>Model C</span>
          </div>
          <div className="model">
            <span>Model D</span>
          </div>
        </div>
      </div>
    </section>
  );
};
