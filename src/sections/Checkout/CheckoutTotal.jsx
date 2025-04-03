import React, { useMemo, useState } from "react";
import Seperator from "../../components/Seperator";
import Button from "../../components/Button";
import { useCartStore } from "../../store";
import { useFormContext } from "react-hook-form";
import { cn } from "../../utils/cn";

function CheckoutTotal() {
  const { setValue, register, formState: { errors } } = useFormContext();
  const cart = useCartStore((state) => state.cart);
  const shippingPrice = useCartStore((state) => state.shippingPrice);
  const [selectedOption, setSelectedOption] = useState("flatAndFree");

  const subCartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0,
    );
  }, [cart]);

  const { cartTotal, freeShipping, shippingDiscount } = useMemo(() => {
    const shippingDiscount =
      shippingPrice >= 5000 || selectedOption !== "flatAndFree" ? 0 : 15;
    const cartTotal = subCartTotal + shippingDiscount;
    return { cartTotal, freeShipping: shippingPrice >= 5000, shippingDiscount };
  }, [shippingPrice, subCartTotal, selectedOption]);

  const checkoutSubmission = useMemo(() => {
    return {
      itemOrdered: cart?.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        totalPrice: item.discountedPrice * item.quantity,
      })),
      subCartTotal,
      cartTotal,
      shippingDiscount,
    };
  }, [cart, shippingPrice, cartTotal]);

  return (
    <div className="bg-primary px-3 py-5 md:mx-auto lg:p-10">
      <p className="text-lg font-medium">Your order</p>
      <div className="mt-5 flex justify-between px-2">
        <p className="text-sm">Products</p>
        <p className="text-sm">Subtotal</p>
      </div>
      <Seperator className={"mt-3"} />
      <div className="mt-3 flex flex-col gap-2">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex w-full items-center justify-between px-2"
          >
            <div className="flex flex-col gap-0.5">
              <p className="w-[150px] truncate text-[.85rem] md:w-[220px] lg:w-[170px]">
                {item.name}
              </p>
              <p className="text-xs font-medium">&times; {item.quantity}</p>
            </div>
            <p className="text-sm">
              ${(item.discountedPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <Seperator className={"mt-3"} />
      <div className="mt-5 flex justify-between px-2">
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
        </div>
      </div>
      <Seperator />
      <div className="flex items-center justify-between px-2 py-3">
        <p className="text-sm">Total</p>
        <p className="text-lg font-semibold">${cartTotal.toFixed(2)}</p>
      </div>

      <div className="my-1 flex items-center gap-3">
        <input type="checkbox" className={cn("h-4 w-4", errors?.terms && "animate-pulse")} {...register("terms", { required: true })} />
        <p className={cn("text-[0.8rem]", errors?.terms && "text-red-600 animate-pulse")}>
          I have read and agree to the website terms and conditions
        </p>
      </div>

      <Button
        // onClick={() => navigate("/checkout")}
        type="submit"
        variant={"primary"}
        className={"mt-3 w-full"}
        onClick={setValue("checkoutSubmission", checkoutSubmission)}
      >
        Place order
      </Button>
    </div>
  );
}

export default CheckoutTotal;
