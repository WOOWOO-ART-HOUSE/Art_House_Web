import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Link } from "react-router-dom";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Boxes,
  LayoutList,
  ShoppingBasket,
  SquarePen,
  Trash2,
} from "lucide-react";
export default function MembershipScreen() {
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Product Name" },
      { accessorKey: "category", header: "Category" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "stock", header: "Stock" },
      {
        header: "Actions",
        accessorKey: "actions",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {/* Edit */}
            <button
              onClick={() => console.log("Edit:", row.original)}
              className="px-3 py-2 text-sm bg-green-100 text-white rounded hover:bg-green-200 cursor-pointer"
            >
              <SquarePen color="green" size={18} />
            </button>

            {/* Delete */}
            <button
              onClick={() => console.log("Delete:", row.original)}
              className="px-3 py-2 text-sm bg-red-100 rounded hover:bg-red-200 cursor-pointer"
            >
              <Trash2 color="red" size={18} />
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
        name: "Laptop",
        category: "Electronics",
        price: "$1200",
        stock: 15,
      },
      { id: 2, name: "T-Shirt", category: "Clothing", price: "$25", stock: 50 },
      { id: 3, name: "Shoes", category: "Footwear", price: "$80", stock: 30 },
      {
        id: 4,
        name: "Smartphone",
        category: "Electronics",
        price: "$900",
        stock: 20,
      },
      {
        id: 5,
        name: "Watch",
        category: "Accessories",
        price: "$150",
        stock: 40,
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

  const cards = [
    {
      title: "Total Members",
      value: 100,
      icon: <ShoppingBasket size={22} className="text-gray-500" />,
    },
    {
      title: "Active Members",
      value: "50",
      icon: <Boxes size={22} className="text-gray-500" />,
    },
    {
      title: "New Members",
      value: "5",
      icon: <LayoutList size={22} className="text-gray-500" />,
    },

    {
      title: "Old Members",
      value: 50,
      icon: <ArrowDownCircle size={22} className="text-gray-500" />,
    },
    {
      title: "Pending Renewals",
      value: 50,
      icon: <ArrowUpCircle size={22} className="text-gray-500" />,
    },
  ];
  return (
    <div className="p-1">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">Membership List</h1>
        <Link
          className="w-[165px] bg-black text-white py-2 px-3 rounded  text-[14px] font-semibold transition text-center border-radius-[50px]"
          to="/create-new-membership"
        >
          Create Membership
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-3">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-4  hover:shadow-sm transition duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-2 text-gray-600">
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>

            <div className="mt-3 text-2xl font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}
