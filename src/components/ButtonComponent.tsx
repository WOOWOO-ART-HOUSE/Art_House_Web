import React from "react";
import { Link } from "react-router-dom";
interface ButtonProps {
  title: string;
}

export default function ButtonComponent({ title }: ButtonProps) {
  return (
    <button className="w-full bg-black text-white py-4 px-1 rounded-xl text-base font-semibold transition cursor-pointer">
      {title}
    </button>
  );
}
