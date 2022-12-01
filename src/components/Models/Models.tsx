import { FC, useEffect, useState } from "react";

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

export const Models: FC = () => {
  const swiper = useSwiper();
  const [slidesPerView, setSlidesPerView] = useState<number>(
    window.screen.width <= 800 ? 1 : 2
  );

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
    <section className="Models" id="modelos">
      <SectionHeading heading="Elige su tipo" />
      <div className="Models__content">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
        >
          <SwiperSlide>
            <Model
              nombre="Tipo A"
              habitaciones={2}
              banos={2}
              metros={100}
              niveles={1}
              img="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Tipo B"
              habitaciones={2}
              banos={1}
              metros={240}
              niveles={1}
              img="b"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Tipo C"
              habitaciones={3}
              banos={2.5}
              metros={140}
              niveles={2}
              img="c"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Tipo D"
              habitaciones={2}
              banos={1}
              metros={68}
              niveles={1}
              img="d"
            />
          </SwiperSlide>
          <div className="swiper__buttons">
            <button className="swiper-prev" onClick={() => swiper.slidePrev()}>
              <ArrowBackIos fontSize="large" />
            </button>
            <button
              className="swiper-next"
              onClick={() => {
                console.log(swiper);
              }}
            >
              <ArrowForwardIos fontSize="large" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
