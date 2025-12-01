import React, { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
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
  Megaphone,
  Handshake,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const navigate = useNavigate();
  const handleToggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const handleMenuClick = (menu, path = null) => {
    setActiveMenu(menu);
    setActiveSubmenu("");
    if (path) navigate(path);
  };

  const handleSubmenuClick = (menu, submenu, path) => {
    setActiveMenu(menu);
    setActiveSubmenu(submenu);
    navigate(path);
  };

  return (
    <div
      className={`h-screen bg-white transition-all duration-300 border-r border-gray-200
      ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* MENU LIST */}
      <div className="p-3 text-gray-700 text-sm mt-16">
        <div>
          <button
            className={`flex items-center gap-3 w-full py-2 rounded px-2 cursor-pointer ${
              activeMenu === "home" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick("home", "/")}
          >
            <LayoutDashboard size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Home</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2  rounded px-2 cursor-pointer ${
              activeMenu === "sales" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("sales");
              handleToggleMenu("sales");
            }}
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
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "pos" ? "font-semibold" : ""
                }`}
                onClick={() => handleSubmenuClick("sales", "pos", "/pos")}
              >
                Pos
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "invoices" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("sales", "invoices", "/invoices")
                }
              >
                Invoices
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "payments" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("sales", "payments", "/payments")
                }
              >
                Payments
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "quotations" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("sales", "quotations", "/quotations")
                }
              >
                Quotations
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "creditnotes" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("sales", "creditnotes", "/creditnotes")
                }
              >
                Credit Notes
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "purchases" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("purchases");
              handleToggleMenu("purchases");
            }}
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
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "purchase" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick(
                    "purchases",
                    "purchase",
                    "/purchase-products"
                  )
                }
              >
                Purchase
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "purchaseOrder" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick(
                    "purchases",
                    "purchaseOrder",
                    "/purchase-orders"
                  )
                }
              >
                Purchase Order
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "inventory" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("purchases", "inventory", "/inventory")
                }
              >
                Inventory
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "debitNotes" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("purchases", "debitNotes", "/debit-notes")
                }
              >
                Debit Notes
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "catalogue" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("catalogue");
              handleToggleMenu("catalogue");
            }}
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
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "products" ? "font-semibold" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("catalogue", "products", "/products")
                }
              >
                Products
              </p>
              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "services" ? "font-semibold text-black" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("catalogue", "services", "/services")
                }
              >
                Services
              </p>

              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "membership"
                    ? "font-semibold text-black"
                    : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("catalogue", "membership", "/membership")
                }
              >
                Membership
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "network" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("network");
              handleToggleMenu("network");
            }}
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
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "vendors" ? "font-semibold text-black" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("network", "vendors", "/vendors")
                }
              >
                Vendors
              </p>

              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "customers"
                    ? "font-semibold text-black"
                    : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("network", "customers", "/customers")
                }
              >
                Customers
              </p>

              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "partners" ? "font-semibold text-black" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("network", "partners", "/partners")
                }
              >
                Partners
              </p>

              <p
                className={`cursor-pointer hover:text-black ${
                  activeSubmenu === "guests" ? "font-semibold text-black" : ""
                }`}
                onClick={() =>
                  handleSubmenuClick("network", "guests", "/guests")
                }
              >
                Guests
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "communication"
                ? "bg-gray-100"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("communication");
              handleToggleMenu("communication");
            }}
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
              {["email", "whatsapp", "text"].map((item) => (
                <p
                  key={item}
                  className={`cursor-pointer hover:text-black ${
                    activeSubmenu === item ? "font-semibold text-black" : ""
                  }`}
                  onClick={() =>
                    handleSubmenuClick("communication", item, `/comm/${item}`)
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "marketing" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("marketing");
              handleToggleMenu("marketing");
            }}
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
              {["coupon", "giftcards", "rewards", "post"].map((item) => (
                <p
                  key={item}
                  className={`cursor-pointer hover:text-black ${
                    activeSubmenu === item ? "font-semibold text-black" : ""
                  }`}
                  onClick={() =>
                    handleSubmenuClick("marketing", item, `/marketing/${item}`)
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "reports" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleMenuClick("reports");
              handleToggleMenu("reports");
            }}
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
              {["sales", "purchase", "visitors"].map((item) => (
                <p
                  key={item}
                  className={`cursor-pointer hover:text-black ${
                    activeSubmenu === item ? "font-semibold text-black" : ""
                  }`}
                  onClick={() =>
                    handleSubmenuClick("reports", item, `/reports/${item}`)
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "analytics" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick("analytics")}
          >
            <BarChart3 size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Analytics</span>
            )}
          </button>
        </div>

        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "programs" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick("programs")}
          >
            <Handshake size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Programs</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "accounting" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick("accounting")}
          >
            <BookAudio size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Accounting</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className={`flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer ${
              activeMenu === "wallet" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick("wallet")}
          >
            <Wallet size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Wallet</span>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center gap-3 w-full py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
            <LogOut size={22} />
            {!collapsed && (
              <span className="font-semibold text-[15px]">Logout</span>
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
