import React from "react";
import {
  DescriptionPanel1,
  TextHeading,
} from "./Collection1";
import Text from "../../components/Text";
import Container from "../../components/Container";
import Seperator from "../../components/Seperator";
import Button from "../../components/Button";
import image6 from "../../assets/Images/home/image-06.webp";
import image5 from "../../assets/Images/home/image-05.webp";

function Collection2() {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-between gap-7 py-7 md:flex-row md:gap-[30px] lg:py-20 lg:pb-15">
        <div className="w-full lg:w-[40%]">
          {/* decoration heading */}
          <TextHeading />
          <Button variant={"tertiary"} icon={true} className={"my-7 lg:my-12 w-auto"}>
            Shop Collection
          </Button>
          <img src={image5} alt="panel Image" className="h-auto w-full" />
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-[48.90%] lg:gap-20">
          <DescriptionPanel1 image={image6} />
        </div>
      </div>
      <Seperator className="my-1 lg:my-0" />
    </Container>
  );
}

export default Collection2;
