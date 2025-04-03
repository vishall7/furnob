import React, { useEffect, useMemo } from "react";
import { cn } from "../../utils/cn";
import { useCartStore, useOpenCartDrawerStore } from "../../store";
import { ShoppingCartIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export function ProgressBarSatus({ className }) {
  const shippingPrice = useCartStore((state) => state.shippingPrice);

  const width = useMemo(() => {
    if (shippingPrice <= 5000) {
      return `${(shippingPrice / 5000) * 100}%`;
    } else {
      return "100%";
    }
  }, [shippingPrice]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-3 border border-neutral-200 px-5 py-5",
        className,
      )}
    >
      {shippingPrice <= 5000 ? (
        <p className="text-sm">
          Add{" "}
          <span className="font-semibold text-amber-600">
            {5000 - shippingPrice}$
          </span>{" "}
          more to get free shipping
        </p>
      ) : (
        <p className="text-sm">You are eligible for free shipping</p>
      )}
      <div className="h-[5px] w-full rounded-sm bg-neutral-200">
        <div
          className="h-full rounded-sm bg-amber-600"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
}

function CartDrawer() {
  const navigate = useNavigate();
  const openCartDrawer = useOpenCartDrawerStore(
    (state) => state.openCartDrawer,
  );
  const setOpenCartDrawer = useOpenCartDrawerStore(
    (state) => state.setOpenCartDrawer,
  );

  const cart = useCartStore((state) => state.cart) || [];
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleClick = () => {
    setOpenCartDrawer();
  };

  const handleNavigate = () => {
    setOpenCartDrawer();
    navigate("/shop");
  };

  const handleViewCartNavigate = () => {
    setOpenCartDrawer();
    navigate("/cart");
  };

  const handleCheckoutNavigate = () => {
    setOpenCartDrawer();
    navigate("/checkout");
  };

  useEffect(() => {
    if (openCartDrawer) {
      document.body.classList.add("cart-open");
    } else {
      document.body.classList.remove("cart-open");
    }
  }, [openCartDrawer]);

  return (
    <div>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-200",
          openCartDrawer ? "visible opacity-50" : "invisible opacity-0",
        )}
        onClick={handleClick}
      ></div>

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full overflow-auto bg-neutral-50 shadow-lg transition-transform duration-300 ease-in-out md:w-2/5 lg:w-2/8",
          openCartDrawer ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="text-lg">Shopping Cart</h2>
          <X
            size={20}
            strokeWidth={1.9}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>

        <div className="overflow-auto p-3">
          {cart.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="relative flex w-full gap-3 border-b border-neutral-200 py-2"
                >
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    className="h-18 w-18 object-cover"
                  />
                  <div className="flex w-full flex-col">
                    <p className="w-[85%] font-medium">{item.name}</p>
                    <span className="font-medium text-amber-600">
                      <span className="font-normal text-black">
                        {item.quantity > 1 && item.quantity}
                      </span>
                      {item.quantity > 1 && (
                        <span className="font-normal text-black">
                          &nbsp; &times; &nbsp;
                        </span>
                      )}
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <span className="absolute right-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:bg-neutral-200">
                    <X
                      size={13}
                      strokeWidth={1.9}
                      onClick={() => removeFromCart(item)}
                    />
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5 py-5">
              <ShoppingCartIcon size={100} strokeWidth={1.5} stroke="#d4d4d4" />
              <p>No products in the cart</p>
              <Button variant={"primary"} onClick={handleNavigate}>
                Return to shop
              </Button>
            </div>
          )}

          {cart.length > 0 && (
            <div className="my-6 flex flex-col gap-5">
              <div className="flex w-full items-center justify-between">
                <p className="text-sm font-medium">Subtotal:</p>
                <p className="text-xl font-semibold">
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.discountedPrice * item.quantity,
                    0,
                  )}
                </p>
              </div>

              <ProgressBarSatus />

              <div className="mt-1 flex flex-col gap-3">
                <Button
                  variant={"secondary"}
                  className={
                    "flex w-full items-center justify-center border border-neutral-200 bg-neutral-400 py-3 text-black hover:bg-neutral-500"
                  }
                  onClick={handleViewCartNavigate}
                >
                  view cart
                </Button>
                <Button
                  variant={"primary"}
                  className={"w-full py-3"}
                  onClick={handleCheckoutNavigate}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
