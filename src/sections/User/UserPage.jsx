import Container from "../../components/Container";
import React, { useState } from "react";
import { useGetCurrentUser, useLogoutMutation } from "../../api";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../api/queryClient";

function UserPage() {
  const navigate = useNavigate();
  const {data: user} = useGetCurrentUser({ifUser: true});
  const { mutate } = useLogoutMutation();

  const handleLogout = () => {
    console.log("logout");
    mutate();
  };

  return (
    <Container>
      {user ? (
        <div className="min-h-[300px] w-full py-10">
          <h1 className="text-2xl">
            Hello{" "}
            <span className="font-semibold">
              {user?.username.split(" ")[0]}
            </span>
            !
          </h1>

          <p className="mt-5">
            You are logged in as{" "}
            <span className="font-semibold">{user?.email}</span>
          </p>

          <Button
            onClick={handleLogout}
            variant={"primary"}
            icon
            className={"mt-5 w-auto"}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="min-h-[300px] w-full py-10">
          <h1 className="text-2xl">You are not logged in</h1>
          <Button
            variant={"primary"}
            icon
            className={"mt-5 w-auto"}
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        </div>
      )}
    </Container>
  );
}

export default UserPage;
