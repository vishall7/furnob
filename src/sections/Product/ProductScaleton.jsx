import React from "react";
import Container from "../../components/Container";
import Seperator from "../../components/Seperator";
import { twMerge } from "tailwind-merge";

function Skeleton({ className }) {
  return <div className={twMerge("animate-pulse bg-gray-200", className)} />;
}

function ProductSkeleton() {
  return (
    <Container className={"lg:px-auto md:px-10"}>
      <div className="flex w-full flex-col justify-between gap-5 py-10 md:flex-row md:justify-between md:gap-6 lg:gap-14 lg:py-15">
        <div className="w-full md:w-1/2 lg:w-[48%]">
          <Skeleton className="h-[300px] lg:h-[500px] w-full rounded-md" />
          <div className="mt-4 flex gap-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton key={idx} className="h-16 w-16 rounded-md" />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 md:w-1/2 lg:w-[52%]">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
          <Seperator className={"mb-2"} />

          <div className="flex items-baseline gap-2 lg:mt-2 lg:gap-3">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-6 w-16" />
          </div>

          <div className="my-3 flex items-center gap-5">
            <Skeleton className="h-10 w-24 rounded" />
            <Skeleton className="h-10 w-40 rounded" />
          </div>

          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>

      <div className="pt-5 pb-10 md:pt-2 lg:pt-0">
        <Skeleton className="h-6 w-32" />
        <Seperator className="my-5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </Container>
  );
}

export default ProductSkeleton;
