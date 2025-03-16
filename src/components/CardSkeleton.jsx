import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardStyles = cva("flex flex-col gap-3", {
  variants: {
    size: {
      md: "w-full h-[26rem] md:h-[29rem] lg:h-[22rem]",
      lg: "w-full md:w-[15rem] lg:w-[18.3rem] h-[26rem] lg:h-[29rem]",
    },
  },
  defaultVariants: { size: "md" },
});

function CardSkeleton({ size = "md", className }) {
  return (
    <div className={twMerge(cardStyles({ size }), className, "animate-pulse")}>
      {/* Image Placeholder */}
      <div className="relative w-full h-[70%] bg-gray-300 rounded-lg"></div>

      {/* Details Placeholder */}
      <div className="flex flex-col gap-[6px]">
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-3 w-1/3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
