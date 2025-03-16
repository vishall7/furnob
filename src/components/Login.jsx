import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });
  const { mutate, isSuccess, error, isError } = useLoginMutation();
  const currentLocation = sessionStorage.getItem("currentLocation") || "/user";

  const handleLogin = (data) => {
    mutate(data);
  };

  if (isSuccess) {
    return <Navigate to={currentLocation} />;
  }

  return (
    <>
      <div className="mb-7 text-center md:mb-7 md:gap-8">
        <span className="cursor-pointer text-[1rem] font-semibold text-gray-600 uppercase md:text-lg">
          Login
        </span>
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-sm" htmlFor="identifier">
            Username or email address *
          </label>
          <input
            id="identifier"
            type="text"
            {...register("identifier", { required: true })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm" htmlFor="password">
            Password *
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
        </div>

        <Button variant="primary" className={"mt-4 w-full"}>
          Login
        </Button>
        <p className="cursor-pointer text-sm text-gray-600 hover:text-amber-600">
          Forgot your password?
        </p>

        <div className="mt-2 flex flex-wrap items-start justify-between gap-2 md:mt-4">
          {isError && error ? (
            <span className="text-base text-red-600">{error?.error} ☹️</span>
          ) : (
            <span className="invisible">Placeholder</span>
          )}

          <span
            onClick={() => navigate("/auth/signup")}
            className="cursor-pointer text-sm text-gray-600 hover:text-amber-500"
          >
            Don&apos;t have an account?
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;
