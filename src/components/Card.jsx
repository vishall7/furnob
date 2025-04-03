import { cva } from "class-variance-authority";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import chair from "../assets/Images/home/chair.webp";
import Text from "./Text";
import { Expand, Heart, Star } from "lucide-react";
import { cn } from "../utils/cn";
import { useWishList, useWishListMutation } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store";
import {CartToast, LikeToast, LoginToast} from "./toasts/Toasts";

export const Stars = ({ stars }) => (
  <div className="flex items-center">
    {Array.from({ length: stars }, (_, i) => (
      <Star key={i} size={15} fill="#fcd34d" strokeWidth={0} />
    ))}
    {Array.from({ length: 5 - stars }, (_, i) => (
      <Star key={i} size={15} fill="#d4d4d4" strokeWidth={0} />
    ))}
  </div>
);

const cardStyles = cva("flex flex-col gap-3 group/card", {
  variants: {
    size: {
      md: "w-full h-[29rem] md:h-[29rem] lg:h-[22rem]",
      lg: "w-full md:w-[15rem] lg:w-[18.3rem] h-[26rem] lg:h-[29rem]",
    },
  },
  defaultVariants: { size: "md" },
});

function Card({ product, size = "md", className }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const isProductInCart = useCartStore((state) =>
    state.cart.some((item) => item._id === product._id),
  );

  const navigate = useNavigate();
  const { mutate } = useWishListMutation();

  const { data: wishlist = [] } = useWishList();

  const isLiked = useMemo(
    () => wishlist.some((item) => item._id === product._id),
    [wishlist, product._id],
  );

  const handleClick = () => {
    mutate(
      { product, wasInWishlist: isLiked },
      {
        onError: (error) => {
          requestAnimationFrame(() =>
            toast.error(<LoginToast />),
          );
        },
        onSuccess: () => {
          requestAnimationFrame(() =>
            toast.success(<LikeToast success={!isLiked} />)
          );
        }
      }
    );
  };  

  const discountedPrice = () =>
    (product.price - product.discount).toFixed(2) || product.price;

  const nameToSlug = (name) => name.split(" ").join("-");

  const handleAddToCart = () => {
    if (!isProductInCart) {
      addToCart({
        _id: product._id,
        name: product.name,
        mainImage: product.images[0],
        discountedPrice: parseInt(discountedPrice()),
        quantity: 1,
      });
      toast.success(<CartToast success />);
    } else {
      toast.error(<CartToast />);
    }
  };

  return (
    <div    
    className={twMerge(cardStyles({ size }), className)}>
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <span className="absolute top-5 left-5 z-10 rounded-sm bg-[#c9e3d8] px-2 py-[3px] text-[13px] font-semibold text-black">
          {product.discount ? `-${product.discount}%` : `NEW`}
        </span>
        <div className="absolute top-5 right-5 z-10 flex flex-col gap-2">
          <span
            onClick={handleClick}
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-white"
          >
            <Heart
              size={16}
              stroke="#d4d4d4"
              strokeWidth={2.5}
              className={cn(
                "cursor-pointer duration-300 group-hover:stroke-amber-500",
                isLiked &&
                  "fill-neutral-200 stroke-neutral-200 duration-300 group-hover:fill-amber-500 group-hover:stroke-amber-500",
              )}
            />
          </span>
          <span
            className="group flex h-9 w-9 translate-x-3 items-center justify-center rounded-full bg-white opacity-0 duration-500 group-hover/card:translate-x-0 group-hover/card:opacity-100"
          >
            <Expand
              size={18}
              strokeWidth={2.5}
              className="cursor-pointer stroke-neutral-600 duration-300 group-hover:stroke-amber-500"
            />
          </span>
        </div>
        <img
          src={product?.images[0] || chair}
          alt={product.name}
          onClick={() => navigate(`/product/${nameToSlug(product.name)}/${product._id}`)}
          className="h-full w-full object-cover cursor-pointer"
        />
        <div
          className="absolute bottom-0 z-10 w-full translate-y-full bg-white py-3 text-center duration-500 group-hover/card:translate-y-0 cursor-pointer"
          onClick={handleAddToCart}
        >
          <Text
            as="h3"
            variant="subheading"
            className="text-sm font-semibold uppercase"
          >
            Add to Cart
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <Text as="h3" variant="subheading" className="text-md font-medium">
          {product.name}
        </Text>
        <div className="flex items-center gap-2">
          <Text
            as="h4"
            variant="subheading"
            className="text-md font-bold lg:text-[17px]"
          >
            ${discountedPrice()}
          </Text>
          <Text
            as="h4"
            variant="description"
            size="sm"
            className="font-normal line-through"
          >
            ${product.price}.00
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Stars stars={product.ratings || 0} />
          <Text
            as="p"
            variant={"subheading"}
            className="text-[13px] font-medium"
          >
            {product.ratings || 0}.0 Ratings
          </Text>
        </div>
        <Text as="p" className="text-[13px] font-normal text-green-700">
          <span className="mr-[1px] mb-[2px] inline-block h-[5px] w-[5px] rounded-full bg-emerald-400" />{" "}
          2 Day Delivery
        </Text>
      </div>
    </div>
  );
}

export default Card;
