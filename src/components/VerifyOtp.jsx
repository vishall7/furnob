import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function VerifyOtp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleVerifyOtp = (data) => {
    console.log("Verifying OTP:", data.otp);
    navigate("/dashboard"); // Change this based on your app flow
  };

  return (
    <div className="flex flex-col items-center text-center space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800">Enter OTP</h2>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[85%]">
        Please enter the one-time password (OTP) sent to your registered email.
      </p>

      <form onSubmit={handleSubmit(handleVerifyOtp)} className="w-full space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700" htmlFor="otp">
            OTP Code
          </label>
          <input
            id="otp"
            type="text"
            {...register("otp", { required: true })}
            className="w-full rounded border border-gray-300 p-2 text-center text-lg tracking-widest outline-black"
            maxLength="6"
            placeholder="******"
          />
        </div>

        <Button variant="primary" className="w-full py-3 text-lg font-medium">
          Verify OTP
        </Button>
      </form>

      <p className="text-sm text-gray-600">
        Didn’t receive the OTP?{" "}
        <span className="cursor-pointer text-amber-500 font-medium hover:underline">
          Resend OTP
        </span>
      </p>
    </div>
  );
}

export default VerifyOtp;
