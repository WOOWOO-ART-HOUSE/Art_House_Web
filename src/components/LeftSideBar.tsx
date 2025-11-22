import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  ShoppingCart,
  FileText,
  Users,
  UserPlus,
  Settings,
  Handshake,
  BarChart3,
  FolderKanban,
  Menu,
  PlusCircle,
  Wallet,
  Boxes,
  Truck,
  Receipt,
  ArrowRightFromLine,
  ArrowLeftFromLine,
} from "lucide-react";

export default function LeftSideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const handleToggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div
      className={`h-screen bg-white transition-all duration-300 
      ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* MENU LIST */}
      <div className="p-3 text-gray-700 text-sm mt-3">
        {/* SALES ---------------------------------------------------- */}
        <div>
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("sales")}
          >
            <Wallet size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Sales</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "sales" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "sales" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Invoices</p>
              <p className="cursor-pointer hover:text-black">Credit Notes</p>
              <p className="cursor-pointer hover:text-black">E-Invoices</p>
              <p className="cursor-pointer hover:text-black">Subscriptions</p>
            </div>
          )}
        </div>

        {/* PURCHASES ------------------------------------------------ */}
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("purchases")}
          >
            <ShoppingCart size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Purchases</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "purchases" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "purchases" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Purchase List</p>
              <p className="cursor-pointer hover:text-black">Return Items</p>
            </div>
          )}
        </div>

        {/* PRODUCTS & SERVICES -------------------------------------- */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Boxes size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">
                Products & Services
              </span>
            )}
          </button>
        </div>

        {/* INVENTORY ------------------------------------------------ */}
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("inventory")}
          >
            <FolderKanban size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Inventory</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "inventory" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "inventory" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Stock Summary</p>
              <p className="cursor-pointer hover:text-black">Warehouse</p>
            </div>
          )}
        </div>

        {/* PAYMENTS ------------------------------------------------- */}
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("payments")}
          >
            <Receipt size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Payments</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "payments" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "payments" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Received</p>
              <p className="cursor-pointer hover:text-black">Sent</p>
            </div>
          )}
        </div>

        {/* CUSTOMERS */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Customers</span>
            )}
          </button>
        </div>

        {/* VENDORS */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <UserPlus size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Vendors</span>
            )}
          </button>
        </div>

        {/* INSIGHTS */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <BarChart3 size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Insights</span>
            )}
          </button>
        </div>

        {/* SETTINGS */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Settings size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Settings</span>
            )}
          </button>
        </div>

        {/* REFER */}
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Handshake size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Refer a Friend</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3  py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ArrowRightFromLine size={22} />
            ) : (
              <ArrowLeftFromLine size={22} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
