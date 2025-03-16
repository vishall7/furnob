import React from "react";
import FilterCategories from "./FilterCategories";
import ProductGrid from "./ProductGrid";
import FilterSection from "./FilterSection";
import Container from "../Container";

function ShopGrid() {
  return (
    <Container>
      <div className="flex justify-between py-6 lg:py-12 lg:gap-15 w-full">
        {/* filter section */}
        <FilterSection />
        {/* product section */}
        <ProductGrid />
      </div>
    </Container>
  );
}

export default ShopGrid;
