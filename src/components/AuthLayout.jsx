import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-h-[468px] rounded-lg border border-gray-300 bg-white px-4 py-8 shadow-xl sm:w-[95%] md:w-[50%] md:px-8 md:py-8 lg:w-[30%]">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
