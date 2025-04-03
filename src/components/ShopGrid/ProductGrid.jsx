import { Filter, ChevronDown, X } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useOpenFilterStore } from "../../store";
import { useProducts } from "../../api";
import Card from "../Card";
import Pagination from "../Pagination";
import { usePaginationStore, useFilterStore } from "../../store";
import CardSkeleton from "../CardSkeleton";
import { useParams } from "react-router-dom";

function ProductGrid() {
  const { id } = useParams();
  const categoryKey = id || "shop";

  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const { _openFilter, setOpenFilter } = useOpenFilterStore();
  const {filters, toggleFilters} = useFilterStore();
  const currentPageIndex = usePaginationStore(
    (state) => state.pageIndexes[categoryKey] || 0,
  );
  
  const { data: products, isLoading } = useProducts({
    categoryId: id,
    filters: { page: currentPageIndex + 1, limit: 10, ...filters[categoryKey] },
  });

  const getPaginationText = useCallback((pagination) => {
    if (!pagination) return "Loading...";

    const start = (pagination.page - 1) * pagination.limit + 1;
    const end = Math.min(
      pagination.page * pagination.limit,
      pagination.totalDocs,
    );
    return `Showing ${start}-${end} of ${pagination.totalDocs} products`;
  }, []);

  useEffect(() => {
    const prevRoute = sessionStorage.getItem("prevRoute") || "";
    const prevIndex = sessionStorage.getItem("prevPageIndex") || "";

    if (prevRoute === categoryKey && prevIndex !== String(currentPageIndex)) {
      window.scrollTo(0, 500);
    }

    sessionStorage.setItem("prevPageIndex", currentPageIndex);
    sessionStorage.setItem("prevRoute", categoryKey);
  }, [currentPageIndex, categoryKey]);

  return (
    <div className="w-full md:px-5 lg:max-h-[97rem] lg:w-3/4 lg:px-0">
      <div className="mb-3 flex w-full items-center justify-between">
        {/* Filter Label */}
        {isLaptop ? (
          <p className="lg:text-[.80rem]">{getPaginationText(products)}</p>
        ) : (
          <div
            onClick={() => setOpenFilter(true)}
            className="flex items-center gap-2"
          >
            <Filter size={16} strokeWidth={1.3} />
            <p className="text-sm font-medium">Filter Products</p>
          </div>
        )}

        {/* Select Dropdown */}
        <div className="relative flex items-center">
          <select
            name="filter"
            className="w-full cursor-pointer appearance-none truncate bg-white px-3 py-1 pr-6 text-sm outline-none"
            defaultValue="latest"
            onChange={(e) => toggleFilters(categoryKey, "sort", { id: e.target.value, name: e.target.value })}
          >
            <option value="latest">Sort by latest</option>
            <option value="popularity">Sort by popularity</option>
            <option value="asc">Sort price: low to high</option>
            <option value="desc">Sort price: high to low</option>
          </select>
          <ChevronDown
            size={16}
            strokeWidth={1.3}
            className="pointer-events-none absolute right-2"
          />
        </div>
      </div>
      
      <div className="grid gap-10 py-5 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-y-12">
        {products?.totalDocs === 0 && !isLoading && (
          <p className="text-center text-[.80rem] font-medium">
            No products found
          </p>
        )}
        {isLoading
          ? Array.from({ length: 2 }, (_, i) => (
              <CardSkeleton key={i} size="md" />
            ))
          : products?.docs?.map((product) => (
              <Card key={product._id} size="md" product={product} />
            ))}
      </div>
      {products?.totalPages > 1 && (
        <Pagination pagination={products} className="mt-7 md:mt-10" />
      )}
    </div>
  );
}

export default ProductGrid;
