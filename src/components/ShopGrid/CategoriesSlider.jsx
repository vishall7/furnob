import React from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoryImages } from "../../utils/categoryImages";
import { useMediaQuery } from "react-responsive";
import Separator from "../Seperator";
import { useCategories } from "../../api";
import { useNavigate } from "react-router-dom";

function CategoriesSlider() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  const navigate = useNavigate();

  const { data: categories } = useCategories();

  function getSLidesToShow() {
    if (isLaptop) {
      return 6;
    }
    if (isTablet) {
      return 4;
    } else {
      return 3;
    }
  }

  return (
    <Container>
      <div className="pt-10 pb-5 md:py-10 lg:py-15">
        <Swiper
          spaceBetween={30}
          slidesPerView={getSLidesToShow()}
          centeredSlides={false}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          longSwipes={true}
          longSwipesMs={3000}
        >
          {categories
            ?.filter((category) => categoryImages[category.name])
            .map((category) => (
              <SwiperSlide key={category._id}>
                <div
                  onClick={() =>
                    navigate(
                      `/product-category/${category.name.split(" ").join("-").toLowerCase()}/${category._id}`,
                    )
                  }
                  className="flex flex-col items-center gap-3"
                >
                  <img
                    src={categoryImages[category.name]}
                    alt={category.name}
                    className="h-12 w-12 cursor-pointer md:h-14 md:w-14 lg:h-16 lg:w-16"
                  />
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold">{category.name}</p>
                    <p className="text-xs text-neutral-400">
                      {category.productCount} items
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Separator />
    </Container>
  );
}

export default CategoriesSlider;
