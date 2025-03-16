import React from "react";
import { useFilterStore } from "../../store";
import { useParams } from "react-router-dom";

function FilterBrandColor({ filter }) {

  const {id} = useParams();
  const categoryKey = id || "shop";

  const {filters, toggleFilters} = useFilterStore();

  return (
    <div className="my-10">
      {filter?.colors.length > 0 && (
        <div>
          <p className="mb-5 text-base font-semibold">Filter by color</p>
          <div className="flex flex-col gap-2">
            {filter?.colors.map((color, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={color._id}
                    id={color._id}
                    className="h-4 w-4 cursor-pointer"
                    checked={!!filters[categoryKey]?.colors?.[color._id]}
                    onChange={() => toggleFilters(categoryKey, "colors", { id: color._id, name: color._id })}
                  />
                  <label
                    htmlFor={color._id}
                    className="cursor-pointer text-sm capitalize"
                  >
                    {color._id}
                  </label>
                </div>
                <span className="mr-1 text-[.80rem] text-neutral-400">{`(${color?.count})`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {filter?.brands.length > 0 && (
        <div className="mt-10">
          <p className="mb-5 text-base font-semibold">Brands</p>
          <div className="flex flex-col gap-2">
            {filter?.brands.map((brand, index) => (
              <div
                key={brand._id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={brand.name}
                    id={brand.name}
                    className="h-4 w-4 cursor-pointer"
                    checked={!!filters[categoryKey]?.brands?.[brand._id]}
                    onChange={() => toggleFilters(categoryKey, "brands", { id: brand._id, name: brand.name })}
                  />
                  <label
                    htmlFor={brand.name}
                    className="cursor-pointer text-sm capitalize"
                  >
                    {brand.name}
                  </label>
                </div>
                <span className="mr-1 text-[.80rem] text-neutral-400">{`(${brand?.count})`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBrandColor;
