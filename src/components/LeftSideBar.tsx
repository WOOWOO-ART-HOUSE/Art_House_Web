import React, { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  ArrowRightFromLine,
  ArrowLeftFromLine,
  LayoutDashboard,
  Banknote,
  BookOpenText,
  Network,
  BetweenHorizontalStart,
  FileSpreadsheet,
  BookAudio,
  BadgeIndianRupee,
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
      <div className="p-3 text-gray-700 text-sm mt-16">
        <div>
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <LayoutDashboard size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Home</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("sales")}
          >
            <Banknote size={22} />
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
              <p className="cursor-pointer hover:text-black">All</p>
              <p className="cursor-pointer hover:text-black">POS</p>
              <p className="cursor-pointer hover:text-black">Invoice</p>
              <p className="cursor-pointer hover:text-black">Membership</p>
              <p className="cursor-pointer hover:text-black">Payments</p>
              <p className="cursor-pointer hover:text-black">Quotations</p>
              <p className="cursor-pointer hover:text-black">Creadit Note</p>
            </div>
          )}
        </div>
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
              <p className="cursor-pointer hover:text-black">Purchase</p>
              <p className="cursor-pointer hover:text-black">Purchase Order</p>
              <p className="cursor-pointer hover:text-black">Inventory</p>
              <p className="cursor-pointer hover:text-black">Debit Note</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("catalogue")}
          >
            <BookOpenText size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Catalogue</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "catalogue" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "catalogue" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Products</p>
              <p className="cursor-pointer hover:text-black">Services</p>
              <p className="cursor-pointer hover:text-black">Membership</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("network")}
          >
            <Network size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Network</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "network" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "network" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Vendors</p>
              <p className="cursor-pointer hover:text-black">Customers</p>
              <p className="cursor-pointer hover:text-black">Partners</p>
              <p className="cursor-pointer hover:text-black">Geust</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("communication")}
          >
            <BetweenHorizontalStart size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Communication</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "communication" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "communication" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Email</p>
              <p className="cursor-pointer hover:text-black">Whatsapp</p>
              <p className="cursor-pointer hover:text-black">Text</p>
            </div>
          )}
        </div>

        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("marketing")}
          >
            <BadgeIndianRupee size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Marketing</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "marketing" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "marketing" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Coupon</p>
              <p className="cursor-pointer hover:text-black">Gift Cards</p>
              <p className="cursor-pointer hover:text-black">Rewards</p>
              <p className="cursor-pointer hover:text-black">Post</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2"
            onClick={() => handleToggleMenu("reports")}
          >
            <FileSpreadsheet size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Reports</span>
            )}
            {!collapsed && (
              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === "reports" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openMenu === "reports" && !collapsed && (
            <div className="ml-10 mt-1 space-y-2">
              <p className="cursor-pointer hover:text-black">Sales</p>
              <p className="cursor-pointer hover:text-black">Purchase</p>
              <p className="cursor-pointer hover:text-black">Visitors</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <BarChart3 size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Analytics</span>
            )}
          </button>
        </div>

        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Users size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Programs</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <BookAudio size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Accounting</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2">
            <Wallet size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Wallet</span>
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
