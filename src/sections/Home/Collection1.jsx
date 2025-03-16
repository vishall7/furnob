import React, { useEffect, useMemo, useState } from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import { twMerge } from "tailwind-merge";
import image2 from "../../assets/Images/home/image-02.jpg";
import imageBlock from "../../assets/Images/home/image-block.jpg";
import image4 from "../../assets/Images/home/image-04.jpg";
import { Minus } from "lucide-react";

export const TextHeading = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Text as="span" variant="subheading" size="sm" className="text-amber-600">
        Massey Collection 2021
      </Text>
      <Text
        as="h1"
        variant="heading"
        className="text-[2.25rem]/11 font-normal md:text-[2.87rem]/14"
      >
        New Decoration For Your Living Spaces
      </Text>
      <Text as="p" variant="description" size="md">
        Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula pretium
        magna, eu congue ex quam ut neque.
      </Text>
    </div>
  );
};

export const Timer = ({ targetTime = 10 }) => {
  //time in days
  const targetDate = useMemo(
    () => Date.now() + targetTime * 24 * 60 * 60 * 1000,
    [targetTime],
  );
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  function getTimeLeft(target) {
    const now = Date.now();
    const difference = Math.max(target - now, 0);
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: difference <= 0,
    };
  }

  useEffect(() => {
    if (time.expired) return;

    const tick = () => {
      setTime(getTimeLeft(targetDate));
      const nextTick = 1000 - (Date.now() % 1000);
      timer = setTimeout(tick, nextTick);
    };

    let timer = setTimeout(tick, 1000 - (Date.now() % 1000));

    return () => clearTimeout(timer);
  }, [time.expired, targetDate]);

  const formatTime = (timeUnit) => String(timeUnit).padStart(2, "0");

  return (
    <div className="flex w-full flex-col gap-5">
      <Text>It'll be worth the wait very soon !</Text>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-end gap-1">
          <h1 className="text-2xl/[1em] font-semibold md:text-3xl/[1em] md:font-medium">
            {formatTime(time.days)}
          </h1>
          <p className="text-sm text-neutral-600">d</p>
        </div>
        <span>:</span>
        <div className="flex items-end gap-1">
          <h1 className="text-2xl/[1em] font-semibold md:text-3xl/[1em] md:font-medium">
            {formatTime(time.hours)}
          </h1>
          <p className="text-sm text-neutral-600">h</p>
        </div>
        <span>:</span>
        <div className="flex items-end gap-1">
          <h1 className="text-2xl/[1em] font-semibold md:text-3xl/[1em] md:font-medium">
            {formatTime(time.minutes)}
          </h1>
          <p className="text-sm text-neutral-600">m</p>
        </div>
        <span>:</span>
        <div className="flex items-end gap-1">
          <h1 className="text-2xl/[1em] font-semibold text-amber-600 md:text-3xl/[1em] md:font-medium">
            {formatTime(time.seconds)}
          </h1>
          <p className="text-sm text-amber-600">s</p>
        </div>
      </div>
    </div>
  );
};

export const DescriptionPanel1 = ({ image, className }) => {
  return (
    <div className={twMerge("flex w-full flex-col gap-8", className)}>
      <img src={image || image2} alt="panel Image" className="h-auto w-full" />
      <div className="flex gap-[5px]">
        <Minus
          size={12}
          stroke="#000"
          strokeWidth={4.5}
          className="mt-3 md:mt-1"
        />
        <div className="flex w-full flex-col gap-3 lg:w-100">
          <Text as="h4" variant="subheading" className="text-base/tight">
            Great Design For Home and Decoration.
          </Text>
          <Text as="p" variant="description" size="sm">
            Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
            pretium magna, eu congue ex quam ut neque.
          </Text>
          <Text as="h6" variant="subheading" size="sm">
            Gianluca Darby
          </Text>
        </div>
      </div>
    </div>
  );
};

export const DescriptionPanel2 = ({ image, className, designBy, collection }) => {
  return (
    <div className={twMerge("flex w-full flex-col gap-5", className)}>
      <div className="relative w-full">
        {designBy && (
          <div className="absolute top-[10px] left-[10px] z-100 flex flex-col justify-center gap-[3px] rounded-[2px] bg-white px-3 py-[12px]">
            <p className="text-[12px] text-neutral-400">Designed by</p>
            <h6 className="text-sm font-semibold capitalize">
              {designBy}
              <span className="font-normal"> - France</span>
            </h6>
          </div>
        )}
        <img
          src={image || imageBlock}
          alt="panel image"
          className="h-auto w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Text as="h3" variant="subheading" className="text-2xl font-normal">
          {collection || "Deluxe Venezie"} Collection
        </Text>
        <Button variant="tertiary" icon={true}>
          Shop Collection
        </Button>
      </div>
    </div>
  );
};

function Collection1() {
  return (
    <>
      <Container className="">
        <div className="flex flex-col items-center justify-between gap-9 md:flex-row md:gap-[30px] py-7 lg:py-20 lg:pb-15">
          <div className="flex w-full flex-col items-center justify-center lg:w-[40%]">
            {/* decoration heading */}
            <TextHeading />
            <Seperator className="my-9 w-[60%] lg:w-[40%]" />
            {/* timer */}
            <Timer />
            <DescriptionPanel1 className="mt-7 lg:mt-12" />
          </div>
          <div className="flex w-full flex-col gap-8 lg:w-[48.90%] lg:gap-20">
            <DescriptionPanel2 designBy="Clint Dunham" />
            <DescriptionPanel2 image={image4} collection="Le’Bologna" />
          </div>
        </div>
        <Seperator className="my-1 md:my-2 lg:my-0"/>
      </Container>
    </>
  );
}

export default Collection1;
