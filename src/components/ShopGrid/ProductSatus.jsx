import React from "react";
import { useFilterStore } from "../../store";
import { useParams } from "react-router-dom";

function ProductSatus() {
  const { id } = useParams();
  const categoryKey = id || "shop";

  const { filters, toggleFilters } = useFilterStore();

  return (
    <div>
      <p className="mb-5 text-base font-semibold">Product Status</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="inStock"
            id="inStock"
            className="h-4 w-4 cursor-pointer"
            checked={!!filters[categoryKey]?.status?.["in stock"]}
            onChange={() => toggleFilters(categoryKey, "status", { id: "in stock", name: "in stock" })}
          />
          <label
            htmlFor="inStock"
            className="cursor-pointer text-sm capitalize"
          >
            In Stock
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="onSale"
            id="onSale"
            className="h-4 w-4 cursor-pointer"
            checked={!!filters[categoryKey]?.status?.["out of stock"]}
            onChange={() => toggleFilters(categoryKey, "status", { id: "out of stock", name: "out of stock" })}
          />
          <label htmlFor="onSale" className="cursor-pointer text-sm capitalize">
            On Sale
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductSatus;
