import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Eye, IndianRupee, MoreHorizontal, SendHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InvoiceScreen() {
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "SN", size: 70 },
      { accessorKey: "amount", header: "Amount", size: 100 },
      { accessorKey: "mode", header: "Mode", size: 100 },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          const value = cell.getValue();

          const badgeClass =
            value === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : value === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700";

          return (
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${badgeClass}`}
            >
              {value}
            </span>
          );
        },
        size: 100,
      },

      { accessorKey: "bill", header: "Bill", size: 100 },
      { accessorKey: "customer", header: "Customer", size: 100 },
      { accessorKey: "date", header: "Date", size: 100 },

      {
        accessorKey: "actions",
        header: "Action",
        Cell: () => (
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 rounded bg-yellow-100 hover:bg-yellow-200">
              <IndianRupee size={16} />
            </button>

            {/* View */}
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-purple-100 hover:bg-purple-200">
              <Eye size={16} /> <span className="text-sm">View</span>
            </button>

            {/* Send */}
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-green-100 hover:bg-green-200">
              <SendHorizontal size={16} /> <span className="text-sm">Send</span>
            </button>

            {/* More */}
            <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        id: 1,
        amount: "₹ 1,200",
        mode: " Cash",
        status: "Pending",
        bill: "BILL-1023",
        customer: "Rahul Sharma",
        date: "2025-01-10",
      },
      {
        id: 2,
        amount: "₹ 950",
        mode: " Cash",
        status: "Paid",
        bill: "BILL-2041",
        customer: "Neha Verma",
        date: "2025-01-11",
      },
      {
        id: 3,
        amount: "₹ 2,500",
        mode: " Cash",
        status: "Cancelled",
        bill: "BILL-3344",
        customer: "Amit Kumar",
        date: "2025-01-12",
      },
      {
        id: 4,
        amount: "₹ 780",
        mode: " Cash",
        status: "Pending",
        bill: "BILL-5567",
        customer: "Priya Singh",
        date: "2025-01-13",
      },
      {
        id: 5,
        amount: "₹ 3,100",
        mode: " Cash",
        status: "Paid",
        bill: "BILL-8899",
        customer: "Saurabh Patil",
        date: "2025-01-14",
      },
      {
        id: 6,
        amount: "₹ 1,850",
        mode: " Cash",
        status: "Cancelled",
        bill: "BILL-6732",
        customer: "Manoj Yadav",
        date: "2025-01-15",
      },
      {
        id: 7,
        amount: "₹ 420",
        mode: " Cash",
        status: "Paid",
        bill: "BILL-2921",
        customer: "Anita Desai",
        date: "2025-01-16",
      },
      {
        id: 8,
        amount: "₹ 5,200",
        mode: " Cash",
        status: "Pending",
        bill: "BILL-4820",
        customer: "Rakesh Rao",
        date: "2025-01-17",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiPaperProps: {
      elevation: 0,
      square: true,
      style: {
        boxShadow: "none",
        border: "1px solid #e5e7eb",
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      style: {
        boxShadow: "none",
        border: "1px solid #e5e7eb",
      },
    },
  });
  return (
    <div className="p-1">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">Invoices</h1>
        <div className="flex gap-3">
          <div
            className="w-[120px] bg-black text-white py-2 px-1 rounded  text-[14px] font-semibold transition text-center border-radius-[50px] cursor-pointer"
            onClick={() => navigate("/create-invoice")}
          >
            Create Invoice
          </div>
        </div>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}
