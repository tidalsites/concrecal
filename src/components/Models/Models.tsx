import { FC, useContext, useEffect, useState } from "react";

// Styles
import "./Models.scss";
import "swiper/css";

// Libraries
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Icons
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

// Components
import { Model } from "../Model/Model";
import { SectionHeading } from "../SectionHeading/SectionHeading";

// State
import { LangContext } from "../../state/context/Lang";

export const Models: FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(
    window.screen.width <= 800 ? 1 : 2
  );

  const { lang } = useContext(LangContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width > 800 && slidesPerView !== 2) {
        setSlidesPerView(2);
      } else if (window.screen.width <= 800 && slidesPerView === 2) {
        setSlidesPerView(1);
      }
    });
  }, []);
  return (
    <section className="Models link-target" id="modelos">
      <SectionHeading
        heading={lang === "es" ? "Elige su modelo" : "Choose your model"}
      />
      <div className="Models__content">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
        >
          <SwiperSlide>
            <Model
              nombre={lang === "es" ? "Apartamentos" : "Apartments"}
              habitaciones={"2-3"}
              banos={"1-3"}
              metros={"-"}
              niveles={"2-5"}
              img="apt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre={lang === "es" ? "Modelo 1" : "Model 1"}
              habitaciones={2}
              banos={2}
              metros={100}
              niveles={1}
              img="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre={lang === "es" ? "Modelo 2" : "Model 2"}
              habitaciones={3}
              banos={2}
              metros={110}
              niveles={1}
              img="b"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre={lang === "es" ? "Modelo 3" : "Model 3"}
              habitaciones={3}
              banos={2.5}
              metros={140}
              niveles={2}
              img="c"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre={lang === "es" ? "Modelo 4" : "Model 4"}
              habitaciones={2}
              banos={1}
              metros={68}
              niveles={1}
              img="d"
            />
          </SwiperSlide>
          <div className="swiper__buttons">
            <button aria-label="Previous Slide" className="swiper-prev">
              <ArrowBackIos fontSize="large" />
            </button>
            <button aria-label="Next Slide" className="swiper-next">
              <ArrowForwardIos fontSize="large" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
