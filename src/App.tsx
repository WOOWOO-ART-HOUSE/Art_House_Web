import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotfoundScreen from "./pages/common/NotfoundScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import OtpScreen from "./pages/auth/OtpScreen";
import { useAuthStore } from "./store/authStore";
import AuthRoute from "./routes/AuthRoute";
import FullPageLoader from "./components/FullPageLoader";
import HomeScreen from "./pages/main/home/HomeScreen";
import ProductScreen from "./pages/main/catalogue/ProductScreen";
import ServiceScreen from "./pages/main/catalogue/ServiceScreen";
import MembershipScreen from "./pages/main/catalogue/MembershipScreen";
import CreateNewProductScreen from "./pages/main/catalogue/CreateNewProductScreen";
import CreateNewServiceScreen from "./pages/main/catalogue/CreateNewServiceScreen";
import CreateNewMembershipScreen from "./pages/main/catalogue/CreateNewMembershipScreen";
export default function App() {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  const userRole = user?.role;
  // console.log(userRole);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthRoute />,
      children: [
        { index: true, element: <HomeScreen /> },
        { path: "/products", element: <ProductScreen /> },
        { path: "/services", element: <ServiceScreen /> },
        { path: "/membership", element: <MembershipScreen /> },
        { path: "/create-new-product", element: <CreateNewProductScreen /> },
        { path: "/create-new-service", element: <CreateNewServiceScreen /> },
        {
          path: "/create-new-membership",
          element: <CreateNewMembershipScreen />,
        },
      ],
    },
    {
      path: "/login",
      element:
        token && userRole === "admin" ? (
          <Navigate to="/" replace />
        ) : (
          <LoginScreen />
        ),
    },

    // OTP
    {
      path: "/otp",
      element:
        token && userRole === "admin" ? (
          <Navigate to="/" replace />
        ) : (
          <OtpScreen />
        ),
    },
    { path: "*", element: <NotfoundScreen /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
