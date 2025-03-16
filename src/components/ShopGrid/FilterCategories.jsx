import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { useDropdownStore, useFilterStore } from "../../store";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";

function FilterCategories({ categories, isError }) {

  const {id} = useParams();
  const categoryKey = id || "shop";

  const { openCategory, setOpenCategory } = useDropdownStore();
  const {filters, toggleFilters} = useFilterStore();
  
  return (
    <div className="relative">
      <p className="mb-5 text-base font-semibold">Product Cateogries</p>
      {isError && <p className="text-sm text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Categories not fetched</p>}
      <div className="flex flex-col gap-2">
        {categories?.map((category) => (
          <div key={category._id} className="flex flex-col">
            {/* Category Row */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name={category.name}
                  id={category.name}
                  className="cursor-pointer h-4 w-4"
                  checked={!!filters[categoryKey]?.categories?.[category._id]}
                  onChange={() => toggleFilters(categoryKey, "categories", { id: category._id, name: category.name })}
                />
                <label
                  htmlFor={category.name}
                  className="cursor-pointer text-sm"
                >
                  {category.name}
                </label>
              </div>
              {category.subCategories?.length !== 0 && (
                <ChevronDown
                  size={16}
                  strokeWidth={1.3}
                  className={cn(
                    "cursor-pointer transition-transform duration-500",
                    openCategory === category._id && "rotate-180",
                  )}
                  onClick={() => setOpenCategory(category._id)}
                />
              )}
            </div>

            {/* Subcategories (Properly Aligned Below) */}
            {category.subCategories?.length !== 0 && (
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openCategory === category._id ? "max-h-100" : "max-h-0",
                )}
              >
                <div className="mt-1 flex flex-col gap-2 px-8 py-2">
                  {category.subCategories.map((subCategory) => (
                    <div
                      key={subCategory._id}
                      className="flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        name={subCategory.name}
                        id={subCategory._id}
                        className="cursor-pointer h-4 w-4"
                        checked={!!filters[categoryKey]?.subcategories?.[subCategory._id]}
                        onChange={() => toggleFilters(categoryKey, "subcategories", { id: subCategory._id, name: subCategory.name })}
                      />
                      <label
                        htmlFor={subCategory._id}
                        className="cursor-pointer text-sm"
                      >
                        {subCategory.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(FilterCategories);
