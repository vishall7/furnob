import React from "react";
import Text from "../../components/Text";
import Container from "../../components/Container";
import chair from "../../assets/Images/home/banner-image.jpg";
import star from "../../assets/Images/home/star.png";
import season from "../../assets/Images/home/season-text.webp";
import Button from "../../components/Button";

function Hero() { 

  return (
    <div className="bg-primary flex flex-col-reverse md:flex-row items-center py-7 lg:py-20">
      <Container className="lg:w-[55%] lg:pr-0">
        <div className="flex items-center gap-2">
          <img src={star} alt="star" className="mb-1 h-auto w-[17px]" />
          <Text
            variant="subheading"
            className="text-sm"
          >
            2023 Top Quality Award
          </Text>
        </div>
        <div className="my-[10px] lg:my-7 lg:mb-10">
          <h1 className="flex flex-wrap gap-x-2 lg:gap-x-5 lg:gap-y-2 gap-y-[4px] font-bold text-4xl lg:text-7xl">
            Leave the
            <img src={season} alt="season" className="h-auto w-[95px] lg:w-48" />
            <span>in</span>
            Furnob style
          </h1>
        </div>
        <Text
          variant="description"
          className="text-sm/[1.5] lg:text-lg mb-10 md:mb-[50px]"
        >
          Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna, at porttitor eros leo ac ex. Nunc molestie turpis varius purus accumsan maximus. Nam ut libero aliquet, consequat ipsum sit amet, aliquet odio.
        </Text>
        <Button variant="secondary" icon={true}>Shop Collection</Button>
      </Container>
      <div className="flex items-center justify-center">
        <img src={chair} alt="chair" className="h-auto w-[90%] md:w-[94%] lg:w-[90%] md:mr-2" />
      </div>      
    </div>
  );
}

export default Hero;
