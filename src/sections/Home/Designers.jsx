import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import Seperator from "../../components/Seperator";
import "swiper/css";
import "swiper/css/pagination";

//images

import designer1 from "../../assets/Images/home/designer-01.webp";
import designer2 from "../../assets/Images/home/designer-02.jpg";
import designer3 from "../../assets/Images/home/designer-03.webp";

function Designers() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  function getSLidesToShow() {
    if (isLaptop) {
      return 3;
    }
    if (isTablet) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <Container>
      <div className="pt-7 pb-5 lg:py-14">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Text
            as="h2"
            variant="subheading"
            className="text-[1.75rem]/[1.17em] font-medium"
          >
            Top Designers With 'Furnob'
          </Text>
          <Text variant={"description"} size={"md"} className="lg:px-55">
            Aliquam vel maximus nulla. Etiam viverra nulla ac tellus auctor
            tempus. Donec euismod commodo mi, ac auctor tortor aliquam in diam
            porta hendrerit in id orci.
          </Text>
        </div>
        <div className="mt-8 lg:mt-12">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={getSLidesToShow()}
            centeredSlides={false}
            slidesPerGroup={1}
            touchRatio={1.5}
            threshold={10}
            speed={800}
            longSwipes={true}
            longSwipesRatio={0.1}
            longSwipesMs={100}
            loop={true}
          >
            {[
              {
                id: 1,
                name: "Britney Cooper",
                detail: "Italian Interior Designer",
                image: designer1,
              },
              {
                id: 2,
                name: "Raymond Atkins",
                detail: "French Product Designer",
                image: designer2,
              },
              {
                id: 3,
                name: "Monique Greer",
                detail: "British Interior Designer",
                image: designer3,
              },
            ].map((designer) => (
              <SwiperSlide
                key={designer.id}
                className="relative mb-15 lg:mb-0 cursor-pointer"
              >
                <div className="absolute top-4 left-5 flex flex-col lg:top-7 lg:left-8">
                  <span className="text-2xl font-semibold lg:text-[1.8rem]">
                    {designer.name}
                  </span>
                  <span className="text-sm">{designer.detail}</span>
                </div>
                <img
                  src={designer.image}
                  alt="designer"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default Designers;
