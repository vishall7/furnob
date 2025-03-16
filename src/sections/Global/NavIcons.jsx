import React from "react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../../api";


const Count = ({ className, count = 0 }) => {
  return (
    <div
      className={twMerge(
        "absolute flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white",
        className
      )}
    >
      {count}
    </div>
  );
};

export function SearchIcon() {
  return <Search size={22} strokeWidth={1.9} className="cursor-pointer" />;
}

export function HeartIcon() {
  const navigate = useNavigate();
  const {data: wishlist = []} = useWishList();
  const wishlistCount = wishlist?.length;
  return (
    <div 
    onClick={() => navigate("/wishlist")}
    className="relative">
        <Count count={wishlistCount} className="-top-2 left-3" />
        <Heart size={22} strokeWidth={1.9} className="cursor-pointer" />
    </div>
  );
}

export function CartIcon() {
  return (
    <div className="relative">
        <Count count={2} className="-top-2 left-3" />
        <ShoppingCart size={22} strokeWidth={1.9} className="cursor-pointer" />
    </div>
  );
}
