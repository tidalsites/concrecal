import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./PackageModal.scss";

export type PackageName = "formaleta" | "gris" | "todo" | "none";

interface IPackageModalProps {
  package_name: PackageName;
  setModal: Dispatch<SetStateAction<PackageName>>;
}

export const PackageModal: FC<IPackageModalProps> = ({
  package_name,
  setModal,
}) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const closeMenu = () => {
    setModal("none");
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="PackageModal">
      <button onClick={closeMenu}>X</button>
      <div className="PackageModal__wrapper">
        <div className="PackageModal__title">
          <h2>{package_name}</h2>
        </div>
        <div className="PackageModal__content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            provident accusamus. Maiores eos vitae eaque expedita consequuntur
            facilis exercitationem nesciunt animi quasi facere? Voluptatem,
            numquam.
          </p>
        </div>
      </div>
    </div>
  );
};
