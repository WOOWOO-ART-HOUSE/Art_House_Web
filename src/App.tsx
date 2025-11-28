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
import VendorScreen from "./pages/main/network/VendorScreen";
import CustomerScreen from "./pages/main/network/CustomerScreen";
import PartnerScreen from "./pages/main/network/PartnerScreen";
import GuestScreen from "./pages/main/network/GuestScreen";
import PurchaseProductScreen from "./pages/main/purchase/PurchaseProductScreen";
import PurchaseOrderScreen from "./pages/main/purchase/PurchaseOrderScreen";
import InventoryScreen from "./pages/main/purchase/InventoryScreen";
import DebitNoteScreen from "./pages/main/purchase/DebitNoteScreen";
export default function App() {
  // const token = useAuthStore((state) => state.token);
  // const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiI2MjYxNzMxNjkwIiwiaWF0IjoxNzY0MzE0Nzc4LCJleHAiOjE3NjQ0MDExNzh9.KeWLzjv8vparPlp7bf9T6ADbVCny4Kl3IMH0CKy7zf4";
  const userRole = "admin";

  console.log(token, userRole);

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
        // Catalogue
        { path: "/products", element: <ProductScreen /> },
        { path: "/services", element: <ServiceScreen /> },
        { path: "/membership", element: <MembershipScreen /> },
        { path: "/create-new-product", element: <CreateNewProductScreen /> },
        { path: "/create-new-service", element: <CreateNewServiceScreen /> },
        {
          path: "/create-new-membership",
          element: <CreateNewMembershipScreen />,
        },
        // Network
        {
          path: "/vendors",
          element: <VendorScreen />,
        },
        {
          path: "/customers",
          element: <CustomerScreen />,
        },
        {
          path: "/partners",
          element: <PartnerScreen />,
        },
        {
          path: "/guests",
          element: <GuestScreen />,
        },

        // Purchase
        {
          path: "/purchase-products",
          element: <PurchaseProductScreen />,
        },
        {
          path: "/purchase-orders",
          element: <PurchaseOrderScreen />,
        },
        {
          path: "/inventory",
          element: <InventoryScreen />,
        },
        {
          path: "/debit-notes",
          element: <DebitNoteScreen />,
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
