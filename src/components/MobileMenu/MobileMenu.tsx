import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import "./MobileMenu.scss";
import CloseIcon from "@mui/icons-material/Close";
import { LangContext } from "../../state/context/Lang";

interface IMobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ setMobileMenu }) => {
  const { lang } = useContext(LangContext);

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="MobileMenu">
      <div className="MobileMenu__wrapper">
        <div className="MobileMenu__close">
          <button aria-label="Close mobile menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <nav id="mobile_navigation">
          <ul className="MobileMenu__list">
            <li>
              <a onClick={closeMenu} href="#">
                {lang === "es" ? "Inicio" : "Home"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#nosotros">
                {lang === "es" ? "Nosotros" : "About"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#modelos">
                {lang === "es" ? "Modelos" : "Models"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#paquetes">
                {lang === "es" ? "Paquetes" : "Packages"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#proyectos">
                {lang === "es" ? "Proyectos" : "Projects"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#footer">
                {lang === "es" ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
