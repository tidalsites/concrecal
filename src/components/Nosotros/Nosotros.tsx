import { FC, useState } from "react";
import "./Nosotros.scss";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

// Icons
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

// Types
type SlideStateIndex = 0 | 1 | 2;

export const Nosotros: FC = () => {
  const [activeSlide, setActiveSlide] = useState<SlideStateIndex>(0);

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
    <section className="Nosotros" id="nosotros">
      {/* <div className="Nosotros__wrapper section-wrapper"> */}
      <SectionHeading heading="Sobre Nosotros" />
      <div className="Nosotros__content">
        <div className="Nosotros__copy">
          <p>CONCRECAL PROYECTOS E INGENIERÍA SRL </p>
          <p>
            Empresa destinada a la Dirección y ejecución de proyectos, e
            infraestructuras y Expertos en Infraestructuras y Viviendas en
            concreto armado con el sistema WTF con moldes de aluminio .
          </p>
        </div>
        <div className="Nosotros__statement">
          <div className="Nosotros__statement__btn-group">
            <button
              data-visible={activeSlide !== 0}
              onClick={() => setActiveSlide(prevSlide())}
            >
              <ArrowBackIos />
            </button>
            <button
              data-visible={activeSlide !== 2}
              onClick={() => setActiveSlide(nextSlide())}
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
                <h3>MISIÓN</h3>
                <p>
                  Proveer a nuestros clientes servicios de ingeniería con los
                  más altos estándares de calidad, proporcionar soluciones
                  integrales en la construcción de viviendas y obras civiles,
                  con el respaldo de una trayectoria basada en la excelencia de
                  los servicios y responsabilidad hacia nuestros clientes.
                </p>
              </div>
            </div>
            <div className="Nosotros__statement__slide">
              <div className="Nosotros__statement__slide__wrapper">
                <h3>VISIÓN</h3>
                <p>
                  Sobresalir en el mercado como una empresa responsable,
                  eficiente e innovadora, en el sector de la construcción.
                </p>
                <p>
                  Fomentar la confianza en nuestros clientes en base a
                  excelentes resultados en el tiempo establecido.
                </p>
              </div>
            </div>
            <div className="Nosotros__statement__slide">
              <div className="Nosotros__statement__slide__wrapper">
                <h3>VALORES</h3>
                <ul>
                  <li>Compromiso</li>
                  <li>Innovación</li>
                  <li>Confianza y credibilidad</li>
                  <li>Excelencia</li>
                  <li>Transparencia</li>
                  <li>Integridad</li>
                  <li>Rectitud</li>
                  <li>Respeto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};
