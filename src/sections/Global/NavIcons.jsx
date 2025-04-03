import React from "react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../../api";
import {
  useCartStore,
  useOpenCartDrawerStore,
  useSearchBoxOpenStore,
} from "../../store";

const Count = ({ className, count = 0 }) => {
  return (
    <div
      className={twMerge(
        "absolute flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[12px] text-white",
        className,
      )}
    >
      {count}
    </div>
  );
};

export function SearchIcon() {
  const setOpenSearchBox = useSearchBoxOpenStore(
    (state) => state.setOpenSearchBox,
  );

  const handleClick = () => {
    setOpenSearchBox();
  };
  return (
    <Search
      size={22}
      strokeWidth={1.9}
      className="cursor-pointer"
      onClick={handleClick}
    />
  );
}

export function HeartIcon() {
  const navigate = useNavigate();
  const { data: wishlist = [] } = useWishList();
  const wishlistCount = wishlist?.length;
  return (
    <div onClick={() => navigate("/wishlist")} className="relative">
      <Count count={wishlistCount} className="-top-2 left-3" />
      <Heart size={22} strokeWidth={1.9} className="cursor-pointer" />
    </div>
  );
}

export function CartIcon() {
  const setOpenCartDrawer = useOpenCartDrawerStore(
    (state) => state.setOpenCartDrawer,
  );
  const cartCount = useCartStore((state) => state.cart).length || 0;

  const handleClick = () => {
    setOpenCartDrawer();
  };

  return (
    <div onClick={handleClick} className="relative cursor-pointer">
      <Count count={cartCount} className="-top-2 left-3" />
      <ShoppingCart size={22} strokeWidth={1.9} className="cursor-pointer" />
    </div>
  );
}
