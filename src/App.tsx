import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotfoundScreen from "./pages/common/NotfoundScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import OtpScreen from "./pages/auth/OtpScreen";
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
    { path: "*", element: <NotfoundScreen /> },
  ]);
  return <RouterProvider router={router} />;
}
