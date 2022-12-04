import { FC, SetStateAction, Dispatch, useContext } from "react";
import "./Packages.scss";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

// Types
import { PackageName } from "../PackageModal/PackageModal";

// State
import { LangContext } from "../../state/context/Lang";

interface IPackagesProps {
  setModal: Dispatch<SetStateAction<PackageName>>;
}

export const Packages: FC<IPackagesProps> = ({ setModal }) => {
  const { lang } = useContext(LangContext);
  return (
    <section className="Packages link-target" id="paquetes">
      <SectionHeading
        heading={lang === "es" ? "Elige su paquete" : "Choose your package"}
      />

      <div className="Packages__content">
        <div className="package">
          <button onClick={() => setModal("formaleta")}>
            <p className="package__title">
              <span>{lang === "es" ? "Formaleta" : "Formwork"}</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button onClick={() => setModal("gris")}>
            <p className="package__title">
              <span>{lang === "es" ? "Obra Gris" : "Gray Work"}</span>
            </p>
          </button>
        </div>
        <div className="package">
          <button onClick={() => setModal("todo")}>
            <p className="package__title">
              <span>{lang === "es" ? "Todo Costo" : "Full Cost"}</span>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
