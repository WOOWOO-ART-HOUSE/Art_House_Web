import { MoveLeft, Trash2 } from "lucide-react";
import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useNavigate } from "react-router-dom";

export default function CreatePosScreen() {
  const [productName, setProductName] = useState("");
  const [qty, setQty] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1,
      item: "Paint Brush",
      qty: 10,
      price: "500",
      netAmount: "5000",
    },
    {
      id: 2,
      item: "Paint Bucket",
      qty: 10,
      price: "500",
      netAmount: "5000",
    },
  ]);

  const addItem = () => {
    if (!productName || !qty) return alert("Please enter product & quantity");

    const price = 5000;
    const newRow = {
      id: rows.length + 1,
      item: productName,
      qty: Number(qty),
      price,
      netAmount: price * Number(qty),
    };

    setRows([...rows, newRow]);
    setProductName("");
    setQty("");
  };

  const deleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 50 },
      { accessorKey: "item", header: "Item" },
      { accessorKey: "qty", header: "Qty" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "netAmount", header: "Net Amount" },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() => deleteRow(row.original.id)}
            className="p-2 bg-red-100 rounded hover:bg-red-200"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        ),
      },
    ],
    [rows]
  );

  const table = useMaterialReactTable({
    columns,
    data: rows,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableSorting: false,
    enableTopToolbar: false,
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

  const navigate = useNavigate();

  return (
    <div className="p-2 space-y-2">
      {/* Back Button */}
      <div
        className="cursor-pointer flex gap-2 items-center"
        onClick={() => navigate(-1)}
      >
        <MoveLeft />
        <span>Back</span>
      </div>

      {/* Page Title */}
      <h1 className="text-xl font-bold text-gray-800">Create POS Invoice</h1>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Name
          </label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Enter product name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Qty + Add Button in Same Row */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Quantity
          </label>

          <div className="flex gap-3 w-full">
            <input
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              placeholder="Qty"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none"
            />

            <button
              onClick={addItem}
              className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition font-semibold text-[14px] whitespace-nowrap"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <MaterialReactTable table={table} />
    </div>
  );
}
