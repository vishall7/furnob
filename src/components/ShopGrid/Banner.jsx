import React from "react";
import { useParams } from "react-router-dom";


function Banner({subcategories = [] }) {

  const {slug} = useParams()
  const title = slug?.replaceAll('-', ' ');

  return (
    <div className="w-full bg-[url('./assets/Images/shop/shop-header.webp')] bg-cover bg-center bg-no-repeat">
      <h1 className="py-16 text-center text-4xl font-normal text-white capitalize md:py-20 md:text-5xl lg:py-28 lg:text-7xl">
        {title || "Shop"}
      </h1>
    </div>
  );
}

export default Banner;
