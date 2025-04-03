import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./sections/Global/Header";
import Footer from "./sections/Global/Footer";
import { useGetCurrentUser, useServerCheckStatus} from "./api";
import ErrorBox from "./components/ErrorBox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Spinner from "./components/Spinner";
import CartDrawer from "./sections/Cart/CartDrawer";
import {SessionExpiredToast} from "./components/toasts/Toasts";
import Search from "./components/Search";

function App() { 
  const toastShown = useRef(false);
  const {
    isError,
    isLoading: serverLoading,
  } = useServerCheckStatus();

  const {
    isLoading: userLoading,
    error: userError,
    isError: userIsError,
  } = useGetCurrentUser();

  if (serverLoading || userLoading)
    return <Spinner/>;

  if (isError) return <ErrorBox/>;

  if (userIsError && userError?.error && !toastShown.current) {
    toastShown.current = true;
    requestAnimationFrame(() => toast.error(<SessionExpiredToast />));
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Search />
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
      <ToastContainer position="bottom-right" autoClose={3000} />      
    </div>
  );
}

export default App;
