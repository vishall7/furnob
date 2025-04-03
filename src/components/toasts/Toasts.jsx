import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const CartToast = ({ success }) => (
  <div className="p-2 text-sm text-gray-800">
    {success ? "Added to cart." : "Already in cart."}{" "}
    <Link
      to="/cart"
      className="text-blue-500 underline"
      onClick={() => toast.dismiss()}
    >
      Cart
    </Link>
  </div>
);

export const LoginToast = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    sessionStorage.setItem("currentLocation", pathname);
    toast.dismiss();
  };
  return (
    <div className="p-2 text-sm text-gray-800">
      Please{" "}
      <Link
        to="/auth/login"
        className="text-blue-500 underline"
        onClick={handleClick}
      >
        log in
      </Link>{" "}
      to continue.
    </div>
  );
};

export const SessionExpiredToast = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    sessionStorage.setItem("currentLocation", pathname);
    toast.dismiss();
  };
  return (
    <div className="p-2 text-sm text-gray-800">
      Session expired. Please{" "}
      <Link
        to="/auth/login"
        className="text-blue-500 underline"
        onClick={handleClick}
      >
        log in
      </Link>
    </div>
  );
};

export const LikeToast = ({ success }) => {
  return (
    <div className="p-2 text-sm text-gray-800">
      {success ? "Product liked." : "Product unliked."}
    </div>
  );
};

export const OrderFailedToast = ({ error }) => {
  return (
    <div>
      {(error === "Token Expired" || error === "Token not found") ? (
        <div className="p-2 text-sm text-gray-800">
          Please{" "}
          <Link
            to="/auth/login"
            className="text-blue-500 underline"
            onClick={() => toast.dismiss()}
          >
            log in
          </Link>{" "}
          to continue
        </div>
      ) : (
        <div className="p-2 text-sm text-gray-800">{error}</div>
      )
    }
    </div>
  );
};
