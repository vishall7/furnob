import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState, memo } from "react";
import { useMediaQuery } from "react-responsive";

function ImageGallery({ images, discount }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });

  function getSlidesPerView() {
    if (isMobile) {
      return 4;
    } else if (isTablet) {
      return 5;
    } else {
      return 8;
    }
  }

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        observer={true}
        observeParents={true}
        className="mb-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>            
            <img
              src={img}
              className="h-auto w-full object-cover"
              alt={`Slide ${idx}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={getSlidesPerView()}
        watchSlidesProgress
        modules={[Thumbs]}
        observer={true}
        observeParents={true}
        className="cursor-pointer"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="group">
            <img
              src={img}
              className="group-[.swiper-slide-thumb-active]:border-1.5 h-15 w-15 border border-gray-100 object-cover group-[.swiper-slide-thumb-active]:border-gray-600"
              alt={`Thumb ${idx}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(ImageGallery);
