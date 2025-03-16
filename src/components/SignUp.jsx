import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useLoginMutation, useSignupMutation } from "../api";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {mutate, isError, isSuccess, error} = useSignupMutation({
    onSuccess: () => {
      navigate("/auth/login");
    }
  });

  console.log("isError", isError);
  console.log("isSuccess", isSuccess);
  console.log("error", error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const handleSignup = (data) => {
    mutate(data);
  };

  return (
    <>
      <div className="mb-7 text-center md:mb-7 md:gap-8">
        <span className="cursor-pointer text-[1rem] font-semibold text-gray-600 uppercase md:text-lg">
          Signup
        </span>
      </div>

      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-sm capitalize" htmlFor="username">
            Username *
          </label>
          <input
            id="username"
            type="text"
            {...register("username", { required: true })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm capitalize" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
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
            {...register("password", {
              required: true,
              validate: (value) => {
                if (value.length < 4) {
                  return "Password must be at least 4 characters long.";
                } else if (value.length > 10) {
                  return "Password must be at least 10 characters long.";
                }
              },
            })}
            className="w-full rounded border border-gray-300 p-2 outline-black"
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password?.message}
            </span>
          )}
        </div>
        <Button variant="primary" className={"mt-4 w-full"}>
          Register
        </Button>
        {
          (isError && error?.error) && (
            <span className="text-sm text-red-500">{error.error}</span> 
          )
        }

        {
          isSuccess && (
            <span className="text-sm text-green-500 capitalize">user created successfully</span> 
          )
        }
      </form>
    </>
  );
}

export default SignUp;
