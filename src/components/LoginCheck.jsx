import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function LoginCheck({ isLoading }) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/70">
      {isLoading ? (
        <Spinner className={"text-white"}/>
      ) : (
        <div className="relative flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-lg bg-white p-6 shadow-lg lg:h-[250px] lg:w-[400px]">
          <h2 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            Login Required
          </h2>
          <p className="text-center text-gray-600">
            You need to log in to access this page.
          </p>
          <Button variant="primary" icon={true} onClick={() => navigate("/auth/login")}>
            Go to Login
          </Button>
        </div>
      )}
    </div>
  );
}

export default LoginCheck;
