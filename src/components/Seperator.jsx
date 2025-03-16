import React from "react";
import { twMerge } from "tailwind-merge";

function Seperator({ className }) {
  return (
    <div className="flex w-full">
      <div
        className={twMerge("h-[1px] w-full bg-neutral-200", className)}
      ></div>
    </div>
  );
}

export default Seperator;
