import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

function AuthLayout() {
  const { pathname } = useLocation();

  const isOtpPage = pathname === "/auth/send-otp" || pathname === "/auth/verify-otp"; 

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className={cn(
          "rounded-lg border border-gray-300 bg-white shadow-xl",
          isOtpPage
            ? "px-6 py-6 w-[80%] md:w-[25%]"
            : "px-8 py-8 w-[95%] md:w-[50%] lg:w-[30%]"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
