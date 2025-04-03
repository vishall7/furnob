import React, { useMemo, useState } from "react";
import Seperator from "../../components/Seperator";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store";

function CartTotal() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("flatAndFree");

  const cart = useCartStore((state) => state.cart);
  const shippingPrice = useCartStore((state) => state.shippingPrice);

  const subCartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0,
    );
  }, [cart]);

  const { cartTotal, freeShipping } = useMemo(() => {
    const shippingDiscount =
      (shippingPrice >= 5000) || selectedOption !== "flatAndFree" ? 0 : 15;
    const cartTotal = subCartTotal + shippingDiscount;
    return { cartTotal, freeShipping: shippingPrice >= 5000 };
  }, [shippingPrice, subCartTotal, selectedOption]);

  return (
    <div className="bg-primary h-fit w-full md:w-[40%] md:mx-auto lg:w-[28%] p-5 lg:p-10">
      <p>Cart totals</p>
      <Seperator className={"mt-3"} />
      <div className="mt-10 flex justify-between px-2">
        <p className="text-sm">Subtotal</p>
        <p className="text-sm">${subCartTotal.toFixed(2)}</p>
      </div>
      <Seperator className={"mt-3"} />
      <div className="flex items-center justify-between px-2 py-5">
        <p className="text-sm">Shipping</p>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="shipping" className="text-[0.8rem]">
              {freeShipping ? "Free shipping" : "Flat rate: $15.00"}
            </label>
            <input
              type="radio"
              name="shippingMethod"
              id="shipping"
              checked={selectedOption === "flatAndFree"}
              onChange={() => setSelectedOption("flatAndFree")}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="localPickup" className="text-[0.8rem]">
              Local pickup
            </label>
            <input
              type="radio"
              name="shippingMethod"
              id="localPickup"
              checked={selectedOption === "localPickup"}
              onChange={() => setSelectedOption("localPickup")}
            />
          </div>
          <p className="pr-1 text-[0.8rem]">
            Shipping to <span className="font-semibold">In</span>
          </p>
          <p className="cursor-pointer text-[0.8rem] text-amber-600 underline">
            Change Address
          </p>
        </div>
      </div>
      <Seperator />
      <div className="flex items-center justify-between px-2 py-3">
        <p className="text-sm">Total</p>
        <p className="text-lg font-semibold">${cartTotal.toFixed(2)}</p>
      </div>
      <Button
        onClick={() => navigate("/checkout")}
        variant={"primary"}
        className={"mt-3 w-full"}
      >
        Proceed to checkout
      </Button>
    </div>
  );
}

export default CartTotal;
