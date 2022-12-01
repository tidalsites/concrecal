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
      <SectionHeading heading="Elige su modelo" />
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
              nombre="Model A"
              habitaciones={3}
              banos={2}
              metros={240}
              niveles={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Model B"
              habitaciones={2}
              banos={1}
              metros={240}
              niveles={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Model C"
              habitaciones={3}
              banos={2}
              metros={280}
              niveles={2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Model
              nombre="Model D"
              habitaciones={3}
              banos={2}
              metros={300}
              niveles={2}
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
