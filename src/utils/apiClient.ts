import { axiosInstance } from "./axiosInstance";

export const handleLogin = async (number: string) => {
  try {
    const response = await axiosInstance.post("/auth/login/", {
      whatsappNumber: number,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching to login:", error);
    throw error;
  }
};

export const handleRequestOtp = async (number: string) => {
  try {
    const response = await axiosInstance.post("/auth/request-otp", {
      whatsappNumber: number,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching to request otp.");
    throw error;
  }
};

export const handleVerifyOtp = async (mobileNumber: string, otp: string) => {
  try {
    const response = await axiosInstance.post("/auth/verify-otp", {
      whatsappNumber: mobileNumber,
      otp,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching to verify otp.");
    throw error;
  }
};
