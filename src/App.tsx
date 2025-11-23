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
export default function App() {
  const token = useAuthStore((state) => state.token);
  const [loading, setLoading] = useState(true);

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
      children: [{ index: true, element: <HomeScreen /> }],
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
