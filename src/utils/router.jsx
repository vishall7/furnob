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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="product-category/:slug/:id"
          element={<ProductCategory />}
        />
        <Route
          path="product/:slug/:productId"
          element={<Product />}
        />
        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Route>

      {/* auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Route>
    </>,
  ),
);
