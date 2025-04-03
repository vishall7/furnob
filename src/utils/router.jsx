import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../sections/Home/Home";
import Shop from "../sections/Shop/Shop";
import ProductCategory from "../sections/ProductCategory/ProductCategory";
import WishList from "../sections/WishList/WishList";
import UserPage from "../sections/User/UserPage";
import Login from "../components/Login";
import AuthLayout from "../components/AuthLayout";
import SignUp from "../components/SignUp";
import ProtectedRoute from "../components/ProtectedRoute";
import Product from "../sections/Product/Product";
import CartPage from "../sections/Cart/CartPage";
import ScrollToTop from "../components/ScrollToTop";
import Checkout from "../sections/Checkout/Checkout";
import SendOtp from "../components/SendOtp";
import VerifyOtp from "../components/VerifyOtp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        {/* normal pages */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="product-category/:slug/:id"
          element={<ProductCategory />}
        />

        <Route
          path="product/:slug/:productId"
          element={
            <ScrollToTop>
              <Product />
            </ScrollToTop>
          }
        />
        <Route
          path="/cart"
          element={
            <ScrollToTop>
              <CartPage />
            </ScrollToTop>
          }
        />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>

      {/* auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/send-otp" element={<SendOtp />} />
        <Route path="/auth/verify-otp" element={<VerifyOtp />} />
      </Route>
    </>,
  ),
);
