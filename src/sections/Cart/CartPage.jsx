import React from "react";
import Container from "../../components/Container";
import Seperator from "../../components/Seperator";
import { ProgressBarSatus } from "./CartDrawer";
import CartTable from "./CartTable";
import { useCartStore } from "../../store";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CartTotal from "./CartTotal";

function CartPage() { 
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.cart).length || 0;

  return (
    <Container>
      {cartCount > 0 ? (
        <div className="flex flex-col justify-between gap-5 pt-10 pb-15 lg:flex-row lg:gap-17 w-full">
          {/* cart table */}
          <div className="w-full lg:w-[72%] lg:flex-1">
            <div>
              <ProgressBarSatus className={"mb-5 items-start"} />
              <CartTable />              
            </div>
          </div>
          {/* checkout */}
          <CartTotal />
        </div>
      ) : (
        <div className="flex h-[300px] flex-col justify-center items-center md:items-start gap-3 lg:gap-5 py-15">
          <p className="text-xl lg:text-2xl font-medium">Your cart is empty</p>
          <Button
            onClick={() => navigate("/shop")}
            variant={"primary"}
          >
            Continue Shopping
          </Button>
        </div>
      )}
    </Container>
  );
}

export default CartPage;
