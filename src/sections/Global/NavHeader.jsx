import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleUserRound, MapPin } from "lucide-react";
import { useGetCurrentUser } from "../../api";

function NavHeader() {
    const navigate = useNavigate();
    const {data: user, error} = useGetCurrentUser({ifUser: true});
  return (
    <header className="hidden w-full items-center justify-between border-b border-neutral-200 px-11 py-[11px] lg:flex">
      <p className="text-[.81rem] font-medium">
        Furnob’s COVID-19 Updates & Shipment Delays{" "}
        <span className="cursor-pointer text-[.83rem] text-amber-600 underline">
          Learn More
        </span>
      </p>
      <div className="flex items-center justify-between gap-10">
        <p className="cursor-pointer text-[.80rem]">English</p>
        <p className="cursor-pointer text-[.80rem]">USD</p>
        <div className="flex items-center gap-1">
          <CircleUserRound size={15} strokeWidth={1.3} />
          <p
            onClick={() => navigate("/user")}
            className="cursor-pointer text-[.80rem] capitalize"
          >
            {user ? user.username : "My Account"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={15} strokeWidth={1.3} />
          <p className="cursor-pointer text-[.80rem]">Choose Location</p>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
