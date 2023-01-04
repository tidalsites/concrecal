import { FC, useContext, useState } from "react";
import "./Nosotros.scss";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

// Icons
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

// State
import { LangContext } from "../../state/context/Lang";

// Types
type SlideStateIndex = 0 | 1 | 2;

export const Nosotros: FC = () => {
  const [activeSlide, setActiveSlide] = useState<SlideStateIndex>(0);
  const { lang } = useContext(LangContext);

  const prevSlide: () => SlideStateIndex = () => {
    switch (activeSlide) {
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 1;
    }
  };

  const nextSlide: () => SlideStateIndex = () => {
    switch (activeSlide) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 2;
    }
  };

  return (
    <section className="Nosotros link-target" id="nosotros">
      <SectionHeading heading="Sobre Nosotros" />
      <div className="Nosotros__content">
        <div className="Nosotros__content__wrapper">
          <div className="Nosotros__copy">
            <p>
              {lang === "es"
                ? "CONCRECAL PROYECTOS E INGENIERÍA SRL"
                : "CONCRECAL PROJECTS AND ENGINEERING SRL"}
            </p>
            <p>
              {lang === "es"
                ? "Empresa destinada a la Dirección y ejecución de proyectos, e infraestructuras y Expertos en Infraestructuras y Viviendas en concreto armado con el sistema WTF con moldes de aluminio."
                : "Company dedicated to the Management and execution of projects, and infrastructures and Experts in Infrastructures and Housing in reinforced concrete with the WTF system with aluminum molds."}
            </p>
          </div>
          <div className="Nosotros__statement">
            <div className="Nosotros__statement__btn-group">
              <button
                aria-label="Previous Slide"
                data-visible={activeSlide !== 0}
                onClick={() => {
                  setActiveSlide(prevSlide());
                }}
              >
                <ArrowBackIos />
              </button>
              <button
                aria-label="Next Slide"
                data-visible={activeSlide !== 2}
                onClick={() => {
                  setActiveSlide(nextSlide());
                }}
              >
                <ArrowForwardIos />
              </button>
            </div>
            <div
              className="Nosotros__statement__wrapper"
              data-slide={activeSlide}
            >
              <div className="Nosotros__statement__slide">
                <div className="Nosotros__statement__slide__wrapper">
                  <h3>{lang === "es" ? "MISIÓN" : "Mission"}</h3>
                  <p>
                    {lang === "es"
                      ? "Proveer a nuestros clientes servicios de ingeniería con los más altos estándares de calidad, proporcionar soluciones integrales en la construcción de viviendas y obras civiles, con el respaldo de una trayectoria basada en la excelencia de los servicios y responsabilidad hacia nuestros clientes."
                      : "Provide our clients with engineering services with the highest quality standards, provide comprehensive solutions in home construction and civil works, backed by a track record based on service excellence and responsibility towards our clients."}
                  </p>
                </div>
              </div>
              <div className="Nosotros__statement__slide">
                <div className="Nosotros__statement__slide__wrapper">
                  <h3>{lang === "es" ? "VISIÓN" : "Vision"}</h3>
                  <p>
                    {lang === "es"
                      ? "Sobresalir en el mercado como una empresa responsable, eficiente e innovadora, en el sector de la construcción."
                      : "Stand out in the market as a responsible, efficient and innovative company in the construction sector."}
                  </p>
                  <p>
                    {lang === "es"
                      ? "Fomentar la confianza en nuestros clientes en base a excelentes resultados en el tiempo establecido."
                      : "Foster confidence in our clients based on excellent results in the established time."}
                  </p>
                </div>
              </div>
              <div className="Nosotros__statement__slide">
                <div className="Nosotros__statement__slide__wrapper">
                  <h3>{lang === "es" ? "VALORES" : "Values"}</h3>
                  <ul>
                    <li>{lang === "es" ? "Compromiso" : "Commitment"}</li>
                    <li>{lang === "es" ? "Innovación" : "Innovation"}</li>
                    <li>
                      {lang === "es"
                        ? "Confianza y credibilidad"
                        : "Trust and credibility"}
                    </li>
                    <li>{lang === "es" ? "Excelencia" : "Excellence"}</li>
                    <li>{lang === "es" ? "Transparencia" : "Transparency"}</li>
                    <li>{lang === "es" ? "Integridad" : "Integrity"}</li>
                    <li>{lang === "es" ? "Rectitud" : "Rectitude"}</li>
                    <li>{lang === "es" ? "Respeto" : "Respect"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
