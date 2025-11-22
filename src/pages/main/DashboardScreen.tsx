import React from "react";
import { useAuthStore } from "../../store/authStore";

export default function DashboardScreen() {
  const user = useAuthStore((state) => state.user);
  console.log("user", user);

  return <div>dashboardScreen</div>;
}
