import { FC, useRef } from "react";

// Styles
import "./Models.scss";
import "swiper/css";

// Libraries
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Icons
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

// Components
import { Model } from "../Model/Model";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Models: FC = () => {
  const swiper = useSwiper();
  return (
    <section className="Models" id="modelos">
      <SectionHeading heading="Elige su modelo" />
      <div className="Models__content">
        <Swiper
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper__buttons">
            <button onClick={() => swiper.slidePrev()}>
              <ArrowBackIos fontSize="large" />
            </button>
            <button onClick={() => swiper.slideNext()}>
              <ArrowForwardIos fontSize="large" />
            </button>
          </div>
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
        </Swiper>
      </div>
    </section>
  );
};
