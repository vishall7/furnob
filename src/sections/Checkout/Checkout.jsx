import React from "react";
import Container from "../../components/Container";
import { ProgressBarSatus } from "../Cart/CartDrawer";
import ShippingAddressForm from "./ShippingAddressForm";
import CheckoutTotal from "./CheckoutTotal";
import { useForm, FormProvider } from "react-hook-form";
import { useGetCurrentUser, useSendOrderEmailMutation } from "../../api";
import OrderConfirmBox from "../../components/OrderConfirmBox";
import { toast } from "react-toastify";
import { OrderFailedToast } from "../../components/toasts/Toasts";
import LoginCheck from "../../components/LoginCheck";

function Checkout() {
  const { mutate, isSuccess } = useSendOrderEmailMutation();
  const { data: user } = useGetCurrentUser({ ifUser: true });
  const { handleSubmit, ...methods } = useForm({
    defaultValues: {
      name: user?.username || "",
      email: user?.email || "",
      address: user?.address?.address || "",
      zipcode: user?.address?.zipcode || "",
      notes: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    if (localStorage.getItem("lastOrderPlaced")) {
      const lastOrderPlaced = localStorage.getItem("lastOrderPlaced");
      const timeDiff = Date.now() - lastOrderPlaced;
      if (timeDiff < 600000) {
        requestAnimationFrame(() =>
          toast.error(
            <OrderFailedToast
              error={"You can place only one order per 10 minutes"}
            />,
          ),
        );
        return;
      }
    }
    mutate(data, {
      onError: (error) => {
        requestAnimationFrame(() =>
          toast.error(<OrderFailedToast error={error.error} />),
        );
      },
      onSuccess: () => {
        localStorage.setItem("lastOrderPlaced", Date.now());
      },
    });
  };

  return (
    <Container>
      {isSuccess && <OrderConfirmBox />}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="py-10 lg:py-10">
          <ProgressBarSatus className={"mb-7 items-start"} />
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-15">
            <div className="w-full lg:w-[72%] lg:flex-1">
              <h3 className="mb-5 text-xl font-semibold">Shipping Address</h3>
              <ShippingAddressForm />
            </div>
            <div className="h-fit w-full md:mx-auto md:w-[45%] lg:w-[28%]">
              <CheckoutTotal />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

export default Checkout;
