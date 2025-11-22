import React from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotfoundScreen from "./pages/common/NotfoundScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import OtpScreen from "./pages/auth/OtpScreen";
import DashboardScreen from "./pages/main/dashboardScreen";
import { useAuthStore } from "./store/authStore";
import AuthRoute from "./routes/AuthRoute";
export default function App() {
  const token = useAuthStore((state) => state.token);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthRoute />,
      children: [{ index: true, element: <DashboardScreen /> }],
    },
    {
      path: "/login",
      element: token ? <Navigate to="/" replace /> : <LoginScreen />,
    },

    // OTP
    {
      path: "/otp",
      element: token ? <Navigate to="/" replace /> : <OtpScreen />,
    },
    { path: "*", element: <NotfoundScreen /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
