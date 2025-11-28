import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import LoginScreen from "../pages/auth/LoginScreen";
import HeaderComponent from "../components/HeaderComponent";
import LeftSideBar from "../components/LeftSideBar";

export default function AuthRoute() {
  // const token = useAuthStore((state) => state.token);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiI2MjYxNzMxNjkwIiwiaWF0IjoxNzY0MzE0Nzc4LCJleHAiOjE3NjQ0MDExNzh9.KeWLzjv8vparPlp7bf9T6ADbVCny4Kl3IMH0CKy7zf4";

  if (!token) {
    return <LoginScreen />;
  }

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {/* FIXED HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 bg-red-500 shadow">
        <HeaderComponent />
      </div>
      <div className="flex h-full overflow-hidden border-black">
        <div className=" bg-white overflow-y-auto">
          <LeftSideBar />
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-white mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
