import { FC, useContext, useState } from "react";
import "./Navbar.scss";

// Images
import logo from "../../assets/logo.jpg";
import updatedLogo from "../../assets/logo-updated.svg";

// State
import { LangContext } from "../../state/context/Lang";

// Components
import { LangToggle } from "../LangToggle/LangToggle";
import { MobileMenu } from "../MobileMenu/MobileMenu";

// Iconswidth
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const { lang } = useContext(LangContext);
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <div className="Navbar__logo">
          <img src={updatedLogo} alt="Concrecal Proyectos e Ingeneria SRL" />
        </div>
        <div className="Navbar__links">
          <div className="Navbar__smedia">
            <LangToggle alt={true} />
            <a href="https://wa.me/18292309202">
              <WhatsAppIcon />
              <span className="visually-hidden">Whatsapp</span>
            </a>
            <a
              href="https://www.instagram.com/concrecalproyectos"
              target="_blank"
            >
              <InstagramIcon />
              <span className="visually-hidden">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/concrecal.proyectos"
              target="_blank"
            >
              <FacebookIcon />
              <span className="visually-hidden">Facebook</span>
            </a>
            <a href="mailto:info@concrecalproyectos.com">
              <EmailIcon />
              <span className="visually-hidden">Email</span>
            </a>
          </div>
          <div className="Navbar__nav">
            <nav>
              <ul>
                <li>
                  <a href="#" data-active="true">
                    {lang === "es" ? "Inicio" : "Home"}
                  </a>
                </li>
                <li>
                  <a href="#nosotros">
                    {lang === "es" ? "Nosotros" : "About Us"}
                  </a>
                </li>
                <li>
                  <a href="#modelos">{lang === "es" ? "Modelos" : "Models"}</a>
                </li>
                <li>
                  <a href="#paquetes">
                    {lang === "es" ? "Paquetes" : "Packages"}
                  </a>
                </li>
                <li>
                  <a href="#proyectos">
                    {lang === "es" ? "Proyectos" : "Projects"}
                  </a>
                </li>
                <li>
                  <a href="#footer">{lang === "es" ? "Contacto" : "Contact"}</a>
                </li>
              </ul>
            </nav>
            <div className="Navbar__menu">
              <button
                onClick={() => setMobileMenu(true)}
                aria-label="Menu"
                aria-controls="mobile-navigation"
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
