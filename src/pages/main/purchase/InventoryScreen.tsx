import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { CircleMinus, CirclePlus } from "lucide-react";
import StockInModal from "../../../components/modal/StockInModal";
import StockOutModal from "../../../components/modal/StockOutModal";
export default function InventoryScreen() {
  const [showStockInModal, setShowStockInModal] = useState(false);
  const [showStockOutModal, setShowStockOutModal] = useState(false);
  const cards = [
    {
      title: "Low Stock",
      value: "1 Items (0 Qty)",
      bgColor: "#fef8f8",
    },
    {
      title: "Positive Stock",
      value: "0 Items (0 Qty)",
      bgColor: "#e6f3ee",
    },
    {
      title: "Stock Value Sales Price",
      value: "₹ 0",
      bgColor: "#e5f2ff",
    },

    {
      title: "Stock Value With Purchase Price",
      value: "₹ 0",
      bgColor: "#fdf0e6",
    },
  ];
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 90 },
      { accessorKey: "item", header: "Item" },
      { accessorKey: "qty", header: "Qty" },
      { accessorKey: "purchase_price", header: "Purchase Price" },
      { accessorKey: "sale_price", header: "Sale Price" },
      { accessorKey: "last_updated", header: "Last Updated" },

      {
        header: "Actions",
        accessorKey: "actions",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              className="flex items-center px-3 py-1.5 text-sm bg-green-100 rounded hover:bg-green-200 cursor-pointer gap-1"
              onClick={() => setShowStockInModal(true)}
            >
              <CirclePlus color="green" size={16} />
              <span className="text-green-700 text-[12px] font-medium">
                Stock In
              </span>
            </button>

            <button
              className="flex items-center px-3 py-1.5 text-sm bg-red-100 rounded hover:bg-red-200 cursor-pointer gap-1"
              onClick={() => setShowStockOutModal(true)}
            >
              <CircleMinus color="red" size={16} />
              <span className="text-red-600 text-[12px] font-medium">
                Stock Out
              </span>
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
        item: "Samsung Charger",
        qty: 50,
        purchase_price: "₹250",
        sale_price: "₹350",
        last_updated: "2025-01-12",
      },
      {
        id: 2,
        item: "Leather Wallet",
        qty: 120,
        purchase_price: "₹150",
        sale_price: "₹250",
        last_updated: "2025-01-10",
      },
      {
        id: 3,
        item: "Bluetooth Speaker",
        qty: 35,
        purchase_price: "₹800",
        sale_price: "₹1200",
        last_updated: "2025-01-09",
      },
      {
        id: 4,
        item: "Sports Shoes",
        qty: 75,
        purchase_price: "₹900",
        sale_price: "₹1500",
        last_updated: "2025-01-08",
      },
      {
        id: 5,
        item: "LED Bulb 12W",
        qty: 300,
        purchase_price: "₹60",
        sale_price: "₹110",
        last_updated: "2025-01-05",
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
        <h1 className="text-xl font-semibold ">Inventory List</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 hover:shadow-sm transition duration-300 cursor-pointer`}
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="flex items-center gap-2 text-black">
              <span className="font-medium">{item.title}</span>
            </div>

            <div className="mt-2 text-base font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      <MaterialReactTable table={table} />

      {showStockInModal && (
        <StockInModal onClose={() => setShowStockInModal(false)} />
      )}

      {showStockOutModal && (
        <StockOutModal onClose={() => setShowStockOutModal(false)} />
      )}
    </div>
  );
}
