import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotfoundScreen from "./pages/common/NotfoundScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import OtpScreen from "./pages/auth/OtpScreen";
import { Toaster } from "react-hot-toast";
import DashboardScreen from "./pages/main/dashboardScreen";
export default function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <AuthRoute />,
    //   children: [
    //     { index: true, element: <DashboardScreen /> },
    //     { path: "all_sales_report", element: <AllSalesReport /> },
    //   ],
    // },
    { path: "/login", element: <LoginScreen /> },
    { path: "/otp", element: <OtpScreen /> },
    { path: "/dashboard", element: <DashboardScreen /> },
    { path: "*", element: <NotfoundScreen /> },
  ]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}
