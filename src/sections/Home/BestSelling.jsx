import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Text from "../../components/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import Seperator from "../../components/Seperator";
import { useProducts } from "../../api";
import CardSkeleton from "../../components/CardSkeleton";

function BestSelling() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  const { data, isLoading } = useProducts();

  function getSLidesToShow() {
    if (isLaptop) {
      return 4;
    }
    if (isTablet) {
      return 3;
    } else {
      return 1;
    }
  }

  return (
    <Container>
      <div className="py-6 lg:py-14">
        <div className="mb-8 flex flex-col gap-1 lg:mb-13 lg:flex-row lg:items-baseline lg:gap-5">
          <Text as="h2" className="text-[1.75rem] font-medium text-black">
            Best Selling Products
          </Text>
          <Text as="p" variant={"description"} size="md">
            Visit our shop to see amazing creations from our designers.
          </Text>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={25}
          slidesPerView={getSLidesToShow()}
          centeredSlides={false}
          slidesPerGroup={1}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <SwiperSlide
                  key={i}
                  className="mb-12 !flex items-center justify-center lg:mb-12"
                >
                  <CardSkeleton size={"lg"} />
                </SwiperSlide>
              ))
            : data?.docs.map((product) => (
                <SwiperSlide
                  key={product._id}
                  className="mb-12 !flex items-center justify-center lg:mb-12"
                >
                  <Card
                    size={"lg"}
                    className={"cursor-pointer"}
                    product={product}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <Seperator />
    </Container>
  );
}

export default BestSelling;
