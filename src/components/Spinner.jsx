import React from "react";
import { twMerge } from "tailwind-merge";

const Spinner = ({className}) => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center">
      <div className={twMerge("flex items-center justify-center h-10 w-10", className)}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-black border-t-transparent opacity-50"></div>
    </div>
    </div>
  );
};

export default Spinner;
