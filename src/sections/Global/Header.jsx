import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../utils/cn";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/Images/furnob-logo.png";
import NavHeader from "./NavHeader";
import { CartIcon, HeartIcon, SearchIcon } from "./NavIcons";

const HiddenNav = ({ className, setIsOpen, isOpen }) => {
  return (
    <>
      {/* Background */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300",
          isOpen ? "visible opacity-50" : "invisible opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-full bg-slate-50 shadow-lg transition-transform duration-500 ease-in-out md:w-1/2",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between border-b border-neutral-200 px-6 py-3">
          <img className="h-auto w-40" src={headerLogo} alt="logo" />
          <X
            size={20}
            strokeWidth={1.9}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </nav>

        {/* Main Content */}
        <div className="px-6 py-3">
          <p className="mt-2 mb-4 text-[.65rem] tracking-[.12rem] text-stone-300 uppercase">
            main menu
          </p>
          <ul className="flex flex-col gap-4">
            <NavLink className="cursor-pointer font-[500]">Home</NavLink>
            <NavLink to={"/shop"} className="cursor-pointer font-[500]">
              Shop
            </NavLink>
            <NavLink
              to={"/product-category/living-room/67be13e7c06e9026e6a44304"}
              className="cursor-pointer font-[500]"
            >
              Living Room
            </NavLink>
            <NavLink
              to={"/product-category/kitchen/67be1487c06e9026e6a44316"}
              className="cursor-pointer font-[500]"
            >
              Kitchen
            </NavLink>
            <NavLink
              to={"/product-category/decoration/67be1456c06e9026e6a44310"}
              className="cursor-pointer font-[500]"
            >
              Decoration
            </NavLink>
            <NavLink className="cursor-pointer font-[500]">Blogs</NavLink>
            <NavLink className="cursor-pointer font-[500]">Contact</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavHeader />
      {/* Navbar */}
      <div
        className={cn(
          "border-b border-slate-200 bg-white px-3 lg:border-b-0 lg:px-11",
          pathname === "/" && "lg:bg-primary",
        )}
      >
        <nav className="flex w-full items-center justify-between border-neutral-200 py-[10px] lg:border-b lg:py-[25px]">
          <div className="flex items-center gap-5 lg:gap-15">
            {/* hamburger */}

            <HiddenNav
              className={"lg:hidden"}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />

            <Menu
              size={25}
              strokeWidth={1.5}
              className="cursor-pointer lg:hidden"
              onClick={() => setIsOpen(true)}
            />
            <img
              className="h-auto w-36 md:w-36 lg:w-40"
              src={headerLogo}
              alt="logo"
              onClick={() => navigate("/")}
            />
            <ul className="hidden items-center gap-9 lg:flex">
              <NavLink className="cursor-pointer font-[500]">Home</NavLink>
              <NavLink to={"/shop"} className="cursor-pointer font-[500]">
                Shop
              </NavLink>
              <NavLink
                to={"/product-category/living-room/67be13e7c06e9026e6a44304"}
                className="cursor-pointer font-[500]"
              >
                Living Room
              </NavLink>
              <NavLink
                to={"/product-category/kitchen/67be1487c06e9026e6a44316"}
                className="cursor-pointer font-[500]"
              >
                Kitchen
              </NavLink>
              <NavLink
                to={"/product-category/decoration/67be1456c06e9026e6a44310"}
                className="cursor-pointer font-[500]"
              >
                Decoration
              </NavLink>
              <NavLink className="cursor-pointer font-[500]">Blogs</NavLink>
              <NavLink className="cursor-pointer font-[500]">Contact</NavLink>
            </ul>
          </div>
          {/* icons */}
          <div className="flex items-center gap-3 md:gap-4 pr-2 lg:gap-5">
            <SearchIcon />
            <HeartIcon />
            <CartIcon />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
