import { FC } from "react";
import "./Nosotros.scss";

// Components
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Nosotros: FC = () => {
  return (
    <section className="Nosotros" id="nosotros">
      {/* <div className="Nosotros__wrapper section-wrapper"> */}
      {/* <SectionHeading heading="Nosotros" /> */}
      <div className="Nosotros__copy">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          perferendis eligendi delectus modi magni nesciunt atque dolorum quis,
          corrupti repudiandae deleniti doloribus, saepe deserunt corporis?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aliquid
          provident odit veniam, dolorum nemo!
        </p>
        {/* </div> */}
      </div>
    </section>
  );
};
