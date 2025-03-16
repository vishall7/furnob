import React from 'react'
import { cn } from "../utils/cn";
import { twMerge } from 'tailwind-merge';
import { usePaginationStore } from "../store";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from "react-router-dom";

function Pagination({className, pagination}) {

  const {id} = useParams();
  const categoryKey = id || "shop";

  const currentPageIndex = usePaginationStore(state => state.pageIndexes[categoryKey] || 0);
  const setCurrentPageIndex = usePaginationStore(state => state.setCurrentPageIndex);

  return (
    <div className={twMerge("flex items-center justify-center gap-1", className)}>
        {/* pagination */}
        {pagination?.hasPrevPage && (
          <ChevronLeft size={15} strokeWidth={1.3} onClick={() => setCurrentPageIndex(categoryKey, currentPageIndex - 1)}/>
        )}     
        {Array.from({ length: pagination?.totalPages }).map((_, index ) => (
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-neutral-400 transition duration-300 hover:bg-neutral-200 hover:text-white cursor-pointer",
              index === currentPageIndex && "bg-amber-500 text-white hover:bg-amber-600",
            )}
            key={index}
            onClick={() => setCurrentPageIndex(categoryKey, index)}
          >
            {index + 1}
          </span>
        ))}
        {pagination?.hasNextPage && (
          <ChevronRight size={15} strokeWidth={1.3} onClick={() => setCurrentPageIndex(categoryKey, currentPageIndex + 1)}/>
        )}
      </div>
  )
}

export default Pagination
