import React, { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { handleVerifyOtp } from "../../utils/apiClient";
import { useAuthStore } from "../../store/authStore";

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber;
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  // Handle OTP input change
  const handleChange = (value: string, index: number) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

  const verifyOtp = async () => {
    if (otp.some((digit) => digit === "")) {
      toast.error("Please enter all 4 digits", { duration: 2000 });
      return;
    }

    try {
      setLoading(true);
      const response = await handleVerifyOtp(mobileNumber, otp.join(""));
      setUser(response.user, response.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.log("OTP verification error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {" "}
        {/* increased width */}
        <div className="bg-white shadow-sm rounded-3xl p-10 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-3">
            OTP Verification
          </h2>

          <p className="text-center text-gray-600 mb-8 text-base">
            Enter the 4-digit verification code sent to{" "}
            <b className="font-semibold">{mobileNumber}</b>.
          </p>

          {/* BIGGER OTP INPUTS */}
          <div className="flex justify-between mb-8">
            {otp.map((val, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-2xl text-center text-2xl font-bold focus:border-black focus:outline-none"
              />
            ))}
          </div>

          <ButtonComponent
            title="Verify OTP"
            onClick={verifyOtp}
            loading={loading}
          />

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">Or Sign in with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <span className="font-medium underline cursor-pointer text-black">
              Register Now
            </span>
          </p>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Copyright &copy; 2025 WOO WOOO Art House | Privacy Policy
        </p>
      </div>
    </div>
  );
}
