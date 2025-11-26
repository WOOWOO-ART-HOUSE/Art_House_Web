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
  Megaphone,
  Handshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const handleToggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const navigate = useNavigate();
  return (
    <div
      className={`h-screen bg-white transition-all duration-300 
      ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* MENU LIST */}
      <div className="p-3 text-gray-700 text-sm mt-16">
        <div>
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <LayoutDashboard size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Home</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p className="cursor-pointer hover:text-black">All</p>
              <p className="cursor-pointer hover:text-black">POS</p>
              <p className="cursor-pointer hover:text-black">Invoice</p>
              <p className="cursor-pointer hover:text-black">Membership</p>
              <p className="cursor-pointer hover:text-black">Payments</p>
              <p className="cursor-pointer hover:text-black">Quotations</p>
              <p className="cursor-pointer hover:text-black">Credit Notes</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p className="cursor-pointer hover:text-black">Purchase</p>
              <p className="cursor-pointer hover:text-black">Purchase Order</p>
              <p className="cursor-pointer hover:text-black">Inventory</p>
              <p className="cursor-pointer hover:text-black">Debit Notes</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/products")}
              >
                Products
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/services")}
              >
                Services
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/membership")}
              >
                Membership
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/vendors")}
              >
                Vendors
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/customers")}
              >
                Customers
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/partners")}
              >
                Partners
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/guests")}
              >
                Guests
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p className="cursor-pointer hover:text-black">Email</p>
              <p className="cursor-pointer hover:text-black">Whatsapp</p>
              <p className="cursor-pointer hover:text-black">Text</p>
            </div>
          )}
        </div>

        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
            onClick={() => handleToggleMenu("marketing")}
          >
            <Megaphone size={22} />
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p className="cursor-pointer hover:text-black">Coupon</p>
              <p className="cursor-pointer hover:text-black">Gift Cards</p>
              <p className="cursor-pointer hover:text-black">Rewards</p>
              <p className="cursor-pointer hover:text-black">Post</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
            <div className="ml-10 mt-1 space-y-2 cursor-pointer">
              <p className="cursor-pointer hover:text-black">Sales</p>
              <p className="cursor-pointer hover:text-black">Purchase</p>
              <p className="cursor-pointer hover:text-black">Visitors</p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
            <BarChart3 size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Analytics</span>
            )}
          </button>
        </div>

        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
            <Handshake size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Programs</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
            <BookAudio size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Accounting</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
            <Wallet size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Wallet</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className="flex items-center gap-3  py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
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
