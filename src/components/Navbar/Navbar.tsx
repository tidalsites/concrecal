import { FC } from "react";
import "./Navbar.scss";

// Images
import logo from "../../assets/logo.jpg";

// Components
import { LangToggle } from "../LangToggle/LangToggle";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export const Navbar: FC = () => {
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
          <nav className="Navbar__nav">
            <ul>
              <li>
                <a href="#" data-active="true">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
