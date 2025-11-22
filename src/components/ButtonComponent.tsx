import React from "react";

interface ButtonProps {
  title: string;
  loading?: boolean; // new prop to indicate loading state
  onClick?: () => void;
}

export default function ButtonComponent({
  title,
  loading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full bg-black text-white py-4 px-1 rounded-xl text-base font-semibold transition cursor-pointer flex items-center justify-center ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Submitting..." : title}
    </button>
  );
}
