import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import ProductTable from "./ProductTable";
import { useWishList } from "../../api";
import { useNavigate } from "react-router-dom";

function WishList() {
  const navigate = useNavigate();
  const { data: wishList } = useWishList();

  return (
    <Container>
      <div className="py-15 md:py-18">
        <h1 className="mb-7 text-2xl font-normal md:text-[1.75rem] lg:text-[2rem]">
          Default wishList
        </h1>
        {wishList?.length === 0 && (
          <div className="">
            <p className="mb-4 text-base">Your Wishlist is currently empty</p>
            <Button variant="primary" onClick={() => navigate("/shop")}>
              Return to Shop
            </Button>
          </div>
        )}
        {wishList?.length > 0 && <ProductTable products={wishList} />}
      </div>
    </Container>
  );
}

export default WishList;
