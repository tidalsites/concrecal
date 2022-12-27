import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import { LangContext } from "../../state/context/Lang";
import { ModalContext } from "../../state/context/Modal";
import "./PackageModal.scss";

export type PackageName = "formaleta" | "gris" | "todo" | "none";

interface IPackageModalProps {
  package_name: PackageName;
  children: JSX.Element;
}

export const PackageModal: FC = () => {
  const { lang } = useContext(LangContext);
  const { modal, dispatchModal } = useContext(ModalContext);
  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const closeMenu = () => {
    dispatchModal("none");
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="PackageModal">
      <button onClick={closeMenu}>X</button>
      <div className="PackageModal__wrapper">
        <div className="PackageModal__wrapper__content">
          <div className="PackageModal__title">
            <h2>{modal.type}</h2>
          </div>
          <div className="PackageModal__content">
            <p className="PackageModal__content__title">
              {lang === "es" ? modal.package_title_es : modal.package_title_en}
            </p>
            <ul>
              {(() => {
                return modal.package_list[lang].map((list) => <li>{list}</li>);
              })()}
            </ul>
            <p>
              <span>{modal.materials_included ? "🗹" : "✗"}</span>
              <span>
                {lang === "es" ? "Incluye Materiales" : "Materials Included"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
