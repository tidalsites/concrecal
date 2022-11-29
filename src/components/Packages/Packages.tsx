import { FC, SetStateAction, Dispatch } from "react";
import "./Packages.scss";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

// Types
import { PackageName } from "../PackageModal/PackageModal";

interface IPackagesProps {
  setModal: Dispatch<SetStateAction<PackageName>>;
}

export const Packages: FC<IPackagesProps> = ({ setModal }) => {
  return (
    <section className="Packages" id="paquetes">
      <SectionHeading heading="Elige su paquete" />

      <div className="Packages__content">
        <div className="package">
          <button onClick={() => setModal("formaleta")}>
            <p className="package__title">
              <span>Formaleta y Encofrado</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button onClick={() => setModal("gris")}>
            <p className="package__title">
              <span>Obra Gris</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button onClick={() => setModal("todo")}>
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
