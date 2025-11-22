import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/images/logo/woo_woo_art_house_logo.png";
import ButtonComponent from "../../components/ButtonComponent";
import { handleLogin, handleRequestOtp } from "../../utils/apiClient";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const loginSchema = z.object({
  mobileNumber: z
    .string()
    .min(10, "Mobile number must be 10 digits")
    .max(10, "Mobile number must be 10 digits")
    .regex(/^[0-9]+$/, "Only digits allowed"),
});
export default function LoginScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  useEffect(() => {
    if (errors.mobileNumber) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errors.mobileNumber.message,
        confirmButtonText: "OK",
        confirmButtonColor: "#000000",
      });
    }
  }, [errors.mobileNumber]);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await handleLogin(data.mobileNumber);

      await sendOtp(data.mobileNumber);
    } catch (error: any) {
      console.log("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
        confirmButtonText: "OK",
        confirmButtonColor: "#000000",
      });
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async (mobileNumber: string) => {
    try {
      const response = await handleRequestOtp("+91" + mobileNumber);

      navigate("/otp", { state: { mobileNumber } });
    } catch (error) {
      console.log("OTP send error:", error);
    }
  };

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

          <form className="space-y-6">
            {/* Mobile Number Input */}
            <div
              className={`flex items-center gap-3 border rounded-xl px-4 py-4 bg-gray-50 transition ${
                errors.mobileNumber ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Phone className="w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full bg-transparent outline-none text-gray-800"
                {...login("mobileNumber")}
              />
            </div>

            {/* Verify Button */}
            <ButtonComponent
              title="Submit"
              onClick={handleSubmit(onSubmit)}
              loading={loading}
            />

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm">
              Don’t have an account?{" "}
              <a className="text-black font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
