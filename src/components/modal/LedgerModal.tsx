import { ChevronDown, FileText, MoveDown, Share, X } from "lucide-react";
import React from "react";

export default function LedgerModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Ledger Title</h2>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X size={22} />
        </button>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-green-100 font-medium flex items-center gap-2 cursor-pointer text-green-800">
            <Share size={18} /> Share
          </button>

          <button className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium flex items-center gap-2 cursor-pointer">
            <FileText size={18} /> View PDF <ChevronDown size={16} />
          </button>
        </div>
        <div className="mt-6 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Id #</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Mode</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Closing Balance</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            {/* Empty State Row */}
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-3 text-sm font-medium">
                  Balance as of 01 Apr 2025
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-gray-600 font-medium">₹ 0.00</td>
                <td className="text-green-600 font-semibold">0.00</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          {/* No Data Message */}
          <div className="py-10 text-center text-gray-500 font-medium">
            Oops! No transactions found.
            <br />
            Please select different{" "}
            <span className="text-blue-600 cursor-pointer underline">
              dates
            </span>{" "}
            here.
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between gap-3 mt-6 w-full">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition w-full cursor-pointer font-semibold text-[15px]"
          >
            You got
          </button>

          <button className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition w-full cursor-pointer font-semibold text-[15px]">
            You Gave
          </button>
        </div>
      </div>
    </div>
  );
}
