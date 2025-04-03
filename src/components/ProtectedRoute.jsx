import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useGetCurrentUser } from "../api";
import LoginCheck from "./LoginCheck";
import Spinner from "./Spinner";

function ProtectedRoute() {
  const { pathname } = useLocation();
  const { data: user, isFetching } = useGetCurrentUser({ ifUser: true });

  if (isFetching)
    return (
      <div className="fixed inset-0 z-100 flex h-screen items-center justify-center bg-orange-300">
        <Spinner />
      </div>
    );

  if (!user) {
    sessionStorage.setItem("currentLocation", pathname);
  }

  return (
    <div>
      {!user && <LoginCheck />}
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
