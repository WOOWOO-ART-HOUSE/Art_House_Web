import React from "react";
import img from "../../assets/images/404.png";

import { Link } from "react-router-dom";
export default function NotfoundScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-center">
        <div>
          <img src={img} className="h-96 w-96" />
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 text-center">
        Oops! Page Not Found
      </h1>
      <p className="text-center text-gray-500 max-w-md mb-6">
        It looks like you've taken a wrong turn. Don’t worry, it happens to the
        best of us. The page you’re looking for might have been moved, deleted,
        or possibly never existed.
      </p>
      <Link
        className="bg-[#2b3e8e] text-white text-[14px] font-semibold py-3 px-12 rounded-md hover:bg-[#0b1642] transition-colors mt-10 cursor-pointer"
        to="/"
      >
        Go To Home
      </Link>
    </div>
  );
}
