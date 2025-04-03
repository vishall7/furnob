import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "../../components/Button";
import { useGetCurrentUser } from "../../api";
import { cn } from "../../utils/cn";

function ShippingAddressForm() {
  const { register } = useFormContext();

  const { data: user } = useGetCurrentUser({ ifUser: true });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm" htmlFor="name">
          Username *
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          className="w-full cursor-not-allowed rounded border border-gray-300 bg-gray-100 p-2 outline-black"
          readOnly
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm" htmlFor="email">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          readOnly
          className="w-full cursor-not-allowed rounded border border-gray-300 bg-gray-100 p-2 outline-black"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10">
        <div className="flex w-full flex-col gap-1.5 md:w-2/3">
          <label className="text-sm" htmlFor="address">
            Address *
          </label>
          <input
            id="address"
            type="text"
            {...register("address", { required: true })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
        </div>
        <div className="flex w-full flex-col gap-1.5 md:w-1/2">
          <label className="text-sm" htmlFor="zipcode">
            Zip Code *
          </label>
          <input
            id="zipcode"
            type="text"
            {...register("zipcode", { required: true })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
        </div>
      </div>

      <div className="my-1 flex items-center gap-2">
        <input
          type="checkbox"
          id="saveAdress"
          {...register("saveAdress")}
          disabled={!!user?.address}
          className={cn(
            "h-4 w-4 cursor-pointer",
            user?.address && "cursor-not-allowed bg-gray-100",
          )}
        />
        <label htmlFor="saveAdress" className="text-sm">
          Save this as my default address
        </label>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <label className="text-sm" htmlFor="notes">
          Order notes (optional)
        </label>
        <textarea
          id="notes"
          type="text"
          placeholder="Notes about your order, e.g. special notes for delivery."
          {...register("notes", { required: true })}
          className="h-32 w-full resize-none rounded border border-gray-300 p-2 outline-black placeholder:text-sm placeholder:font-light placeholder:text-neutral-400 md:h-40"
        />
      </div>
    </div>
  );
}

export default ShippingAddressForm;
