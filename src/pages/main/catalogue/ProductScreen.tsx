import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

export default function ProductScreen() {
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Product Name" },
      { accessorKey: "category", header: "Category" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "stock", header: "Stock" },
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

  const table = useMaterialReactTable({ columns, data });

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Products</h1>
      <MaterialReactTable table={table} />
    </div>
  );
}
