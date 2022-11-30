import { Dispatch, FC, SetStateAction, useState } from "react";
import "./Navbar.scss";

// Images
import logo from "../../assets/logo.jpg";

// Components
import { LangToggle } from "../LangToggle/LangToggle";
import { MobileMenu } from "../MobileMenu/MobileMenu";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <div className="Navbar__logo">
          <img src={logo} alt="Concrecal Proyectos e Ingeneria SRL" />
        </div>
        <div className="Navbar__links">
          <div className="Navbar__smedia">
            <LangToggle alt={true} />
            <a href="">
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.instagram.com/concrecalproyectos"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/concrecal.proyectos"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a href="">
              <EmailIcon />
            </a>
          </div>
          <div className="Navbar__nav">
            <nav>
              <ul>
                <li>
                  <a href="#" data-active="true">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                  <a href="#modelos">Modelos</a>
                </li>
                <li>
                  <a href="#paquetes">Paquetes</a>
                </li>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#footer">Contacto</a>
                </li>
              </ul>
            </nav>
            <div className="Navbar__menu">
              <button
                onClick={() => setMobileMenu(true)}
                aria-label="Open mobile menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </div>
  );
};
