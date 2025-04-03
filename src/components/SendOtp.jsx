import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function SendOtp() {
  const navigate = useNavigate();

  const handleSendOtp = () => {
    navigate("/auth/verify-otp");
  };

  return (
    <div className="flex flex-col items-center text-center space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800">Verify Your Email</h2>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[85%]">
        We have sent a one-time password (OTP) to your registered email. Please check your inbox and enter the OTP to proceed.
      </p>

      <Button
        variant="primary"
        className="w-full py-3 text-lg font-medium"
        onClick={handleSendOtp}
      >
        Continue
      </Button>

      <p className="text-sm text-gray-600">
        Didn’t receive the OTP?{" "}
        <span className="cursor-pointer text-amber-500 font-medium hover:underline">
          Resend OTP
        </span>
      </p>
    </div>
  );
}

export default SendOtp;
