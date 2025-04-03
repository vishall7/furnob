import React from "react";
import { useCartStore } from "../../store";
import { X, Minus, Plus } from "lucide-react";
import Button from "../../components/Button";

function QuantitySelector({product}) {
  const {increaseQuantity, decreaseQuantity} = useCartStore();
  const quantity = product?.quantity;

  const increment = () => {
    if(quantity < 10){
      increaseQuantity(product);
    }
  }
  const decrement = () => {
    if(quantity > 1){
      decreaseQuantity(product);
    }
  }

  return (
    <div className="flex w-30 items-center justify-between gap-5 rounded border border-gray-300 px-3 py-2">
      <Minus
        onClick={decrement}
        size={16}
        stroke="#000"
        strokeWidth={2}
        className="scale-90 cursor-pointer"
      />
      {quantity}{" "}
      <Plus
        onClick={increment}
        size={16}
        stroke="#000"
        strokeWidth={2}
        className="scale-90 cursor-pointer"
      />
    </div>
  );
}

const CartTable = () => {
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <>
      <div className="max-h-[400px] w-full overflow-auto">
        <div className="w-full min-w-[700px]">
          <table className="w-full border-b border-gray-300 text-center">
            <thead className="sticky top-0 z-10 bg-white shadow">
              <tr className="border-b border-gray-300">
                <th className="p-3 text-sm font-medium text-neutral-300">
                  Product
                </th>
                <th className="p-3 text-sm font-medium text-neutral-300">
                  Price
                </th>
                <th className="p-3 text-sm font-medium text-neutral-300">
                  Quantity
                </th>
                <th className="p-3 text-sm font-medium text-neutral-300">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-300 bg-white"
                >
                  <td className="relative flex flex-col items-center gap-5 p-3 pt-7 sm:flex-row">
                    <span
                      onClick={() => handleRemoveFromCart(item)}
                      className="absolute top-4 left-0 cursor-pointer rounded-full border border-neutral-300 p-1 transition-all duration-300 hover:bg-neutral-200"
                    >
                      <X size={13} strokeWidth={1.5} />
                    </span>
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="h-15 w-15 object-cover"
                    />
                    {item.name}
                  </td>
                  <td className="p-3">${(item.discountedPrice).toFixed(2)}</td>
                  <td className="px-4 lg:py-3 lg:pl-7 lg:pr-0">
                    <QuantitySelector product={item} />
                  </td>
                  <td className="p-3">
                    ${(item.discountedPrice * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex w-full flex-col lg:items-center lg:justify-between py-5 md:flex-row gap-3">
        <div className="flex flex-1 items-center gap-1 w-full">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-full md:w-2/5 lg:1/3 rounded border border-gray-300 px-3 py-2"
          />
          <Button
            variant={"primary"}
            className={"bg-teal-800 hover:bg-teal-700"}
          >
            Apply
          </Button>
        </div>
        <Button variant={"primary"} onClick={handleClearCart}>remove All</Button>
      </div>
    </>
  );
};

export default CartTable;
