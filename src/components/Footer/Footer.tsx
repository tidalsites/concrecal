import { FC, useContext } from "react";
import "./Footer.scss";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";

// State
import { LangContext } from "../../state/context/Lang";

export const Footer: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer className="Footer" id="footer">
      <div className="Footer__wrapper">
        <div className="Footer__columns">
          <div className="Footer__contact">
            <span className="Footer__column-header">
              {lang == "es" ? "Contacto" : "Contact"}
            </span>
            <a href="https://wa.me/18097523000" target="_blank">
              <WhatsAppIcon />
              <span className="visually-hidden">Whatsapp</span>
              <span>+1 (809) 752-3000</span>
            </a>
            <a href="https://wa.me/18098314609" target="_blank">
              <WhatsAppIcon />
              <span className="visually-hidden">Whatsapp</span>
              <span>+1 (809) 831-4609</span>
            </a>
            <a href="mailto:info@concrecal.com" target="_blank">
              <EmailIcon />
              <span className="visually-hidden">Email</span>
              <span>info@concrecal.com</span>
            </a>
            <a
              href="https://www.instagram.com/concrecalproyectos"
              target="_blank"
            >
              <InstagramIcon />
              <span className="visually-hidden">Instagram</span>
              <span>@concrecalproyectos</span>
            </a>
            <a
              href="https://www.facebook.com/concrecal.proyectos"
              target="_blank"
            >
              <Facebook />
              <span className="visually-hidden">Facebook</span>
              <span>concrecal proyectos</span>
            </a>
          </div>
          <div className="Footer__hours">
            <span className="Footer__column-header">
              {lang == "es" ? "Horarios" : "Hours"}
            </span>
            <ul>
              <li>
                <span>{lang === "es" ? "Lunes" : "Monday"}</span>
                <span>8AM - 6PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Martes" : "Tuesday"}</span>
                <span>8AM - 6PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Miércoles" : "Wednesday"}</span>
                <span>8AM - 6PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Jueves" : "Thursday"}</span>
                <span>8AM - 6PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Viernes" : "Friday"}</span>
                <span>8AM - 6PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Sábado" : "Saturday"}</span>
                <span>9AM -3PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Domingo" : "Sunday"}</span>
                <span>{lang === "es" ? "Cerrado" : "Closed"}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__copyright">
          <span>&copy; Concrecal 2022</span>
          <a href="https://www.tidalsites.com">
            {lang == "es" ? "Creado por TidalSites" : "Powered by TidalSites"}
          </a>
        </div>
      </div>
    </footer>
  );
};
