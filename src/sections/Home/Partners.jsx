import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { partners } from "../../utils/partners";
import Container from "../../components/Container";
import { useMediaQuery } from "react-responsive";
import Seperator from "../../components/Seperator";

function Partners() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const slidesToShow = isDesktop ? 6 : isTablet ? 3 : 2;

  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        freeMode={true}
        spaceBetween={50}
        slidesPerView={slidesToShow}
        centeredSlides={false}
        slidesPerGroup={1}
        touchRatio={1}
        grabCursor={true}
        resistance={false}
        loop={true}
        speed={800}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex items-center justify-center py-7 lg:py-10">
              <img
                src={partner.image}
                alt="partner"
                className="h-auto w-[105px] cursor-pointer opacity-50 duration-300 ease-in-out hover:opacity-100"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Seperator />
    </Container>
  );
}

export default Partners;
