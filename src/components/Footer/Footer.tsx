import { FC } from "react";
import "./Footer.scss";

// Icons\
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer: FC = () => {
  const lang = "es";
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__columns">
          <div className="Footer__contact">
            <span className="Footer__column-header">
              {lang == "es" ? "Contacto" : "Contact"}
            </span>
            <a href="https://wa.me/" target="_blank">
              <WhatsAppIcon />
              <span>+1 (555) 555-5555</span>
            </a>
            <a href="mailto:info@concrecalproyectos.com" target="_blank">
              <EmailIcon />
              <span>info@concrecalproyectos.com</span>
            </a>
            <a
              href="https://www.instagram.com/expertohomepuntacana/"
              target="_blank"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
          <div className="Footer__hours">
            <span className="Footer__column-header">
              {lang == "es" ? "Horarios" : "Hours"}
            </span>
            <ul>
              <li>
                <span>{lang === "es" ? "Lunes" : "Monday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Martes" : "Tuesday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Miércoles" : "Wednesday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Jueves" : "Thursday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Viernes" : "Friday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Sábado" : "Saturday"}</span>
                <span>7AM -12PM</span>
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
