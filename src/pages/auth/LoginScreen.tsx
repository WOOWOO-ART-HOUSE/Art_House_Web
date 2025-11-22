import React from "react";
import logo from "../../assets/images/logo/woo_woo_art_house_logo.png";
import { Phone } from "lucide-react";
import ButtonComponent from "../../components/ButtonComponent";

export default function LoginScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white shadow-sm rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden p-12">
        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center bg-white">
          <img
            src={logo}
            alt="Login"
            className="h-[80%] w-auto object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
            Login
          </h2>

          <p className="text-center text-gray-600 mb-8 text-base">
            Login to continue and explore your personalized dashboard.
          </p>

          <div className="space-y-6">
            {/* Mobile Number Input */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-4 bg-gray-50 focus-within:border-black transition">
              <Phone className="w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>

            {/* Verify Button */}
            <ButtonComponent title="Submit" />

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm">
              Don’t have an account?{" "}
              <a className="text-black font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
