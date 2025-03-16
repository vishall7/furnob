import React from "react";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";
import { useOpenFilterStore } from "../../store";
import { useMediaQuery } from "react-responsive";
import FilterCategories from "./FilterCategories";
import { useCategories, useFilters } from "../../api";
import FilterBrandColor from "./FilterBrandColor";
import ProductSatus from "./ProductSatus";
import sidebarBanner from "../../assets/Images/shop/sidebar-banner.webp";
import { useLocation, useParams } from "react-router-dom";

function FilterSection() {
  const {pathname: currentLocation} = useLocation();
  const {id} = useParams();
  
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const { openFilter, setOpenFilter } = useOpenFilterStore();
  const { data: categories, isError, isLoading } = useCategories();

  const { data: filter } = useFilters(id ? {categoryId: id} : {});

  return (
    <>
      {/* Desktop Filter (Always Visible on Laptop) */}
      {isLaptop && (
        <div className="w-[23%]">
          {currentLocation === "/shop" && (
            <FilterCategories
              categories={categories}
              isError={isError}
              isLoading={isLoading}
            />
          )}
          <FilterBrandColor filter={filter} />
          <ProductSatus />
          <div className="mt-10">
            <img
              src={sidebarBanner}
              alt="sidebar banner"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Mobile Drawer Filter */}
      {!isLaptop && (
        <>
          {openFilter && (
            <div
              className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300"
              onClick={() => setOpenFilter(false)}
            />
          )}

          <div
            className={cn(
              "fixed top-0 left-0 z-50 h-screen w-[90%] overflow-y-auto bg-white px-5 py-6 shadow-lg transition-transform duration-500 ease-in-out md:w-1/2",
              openFilter ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="mb-7 flex items-center justify-between border-b border-neutral-200 pb-8">
              <p className="text-sm">Filter Products</p>
              <X
                size={20}
                strokeWidth={1.9}
                className="cursor-pointer"
                onClick={() => setOpenFilter(false)}
              />
            </div>
            {currentLocation === "/shop" && (
              <FilterCategories
                categories={categories}
                isError={isError}
                isLoading={isLoading}
              />
            )}
            <FilterBrandColor filter={filter} />
            <ProductSatus />
            <div className="mt-10">
              <img
                src={sidebarBanner}
                alt="sidebar banner"
                className="object-cover"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FilterSection;
