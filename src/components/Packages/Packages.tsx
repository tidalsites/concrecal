import { FC } from "react";
import "./Packages.scss";

export const Packages: FC = () => {
  return (
    <section className="Packages">
      <h2>Opciones</h2>
      <div className="Packages__content">
        <div className="package">
          <button>
            <p className="package__title">
              <span>Formaleta y Encofrado</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button>
            <p className="package__title">
              <span>Hobra Gris</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button>
            <p className="package__title">
              <span>Todo Costo</span>
            </p>
          </button>
        </div>
      </div>
      {/* <div className="Packages__wrapper section-wrapper">
        <h2 className="Packages__heading section-heading--inverted">
          Packages
        </h2>
        <p>
          We build as much as you want. From the ground up to the finishes, or
          just the basics. Choose what is best for you.
        </p>
      </div> */}
    </section>
  );
};
