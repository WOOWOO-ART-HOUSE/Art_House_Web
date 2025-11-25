import React from "react";
import {
  Bell,
  User,
  Megaphone,
  Zap,
  ChevronDown,
  Search,
  LocationEdit,
} from "lucide-react";
import logo from "../assets/images/logo/woo_woo_art_house_logo.png";

export default function HeaderComponent() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 md:px-6 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={logo}
          alt="logo"
          className="h-10 object-contain cursor-pointer"
        />

        <div className="hidden md:flex flex-col leading-tight">
          <h1 className="font-semibold text-sm md:text-base">
            YOUR STORE LOCATION
          </h1>
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition">
            <LocationEdit size={16} color="black" />
            <span className="text-[14px]">BHILAI</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center w-1/2">
        <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-600">
          <Search size={18} />
          <input
            type="text"
            placeholder="Ask SwipeAI"
            className="w-full bg-transparent outline-none px-2 text-sm"
          />
          <span className="text-xs text-gray-500 whitespace-nowrap">
            ctrl + k
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-5">
        {[Zap, Bell, Megaphone, User].map((Icon, i) => (
          <Icon
            key={i}
            size={20}
            className="text-gray-700 hover:text-black cursor-pointer transition"
          />
        ))}
      </div>
    </header>
  );
}
