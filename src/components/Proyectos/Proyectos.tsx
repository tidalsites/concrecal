import { FC } from "react";
import "./Proyectos.scss";

export const Proyectos: FC = () => {
  return (
    <section className="Proyectos">
      {/* <div className="Proyectos__wrapper">
        <h2 className="Proyectos__heading">Proyectos</h2>
      </div> */}

      <div className="Proyectos__content">
        <div className="proyecto">
          {/* <img src={proyectoImg} alt="" /> */}
          <p className="proyecto__title">Proyecto Uno</p>
        </div>
        <div className="proyecto">
          {/* <img src={proyectoImg} alt="" /> */}
          <p className="proyecto__title">Proyecto Dos</p>
        </div>
        <div className="proyecto">
          {/* <img src={proyectoImg} alt="" /> */}
          <p className="proyecto__title">Proyecto Tres</p>
        </div>
      </div>
    </section>
  );
};
