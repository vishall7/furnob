import React from "react";
import { twMerge } from "tailwind-merge";

function Container({ children, className }) {
  return (
    <div
      className={twMerge("mx-auto w-full px-[15px] lg:px-11", className)}
    >
      {children}
    </div>
  );
}

export default Container;
