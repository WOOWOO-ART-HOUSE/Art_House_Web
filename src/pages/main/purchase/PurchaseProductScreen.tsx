import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import CreateVendorModal from "../../../components/modal/CreateVendorModal";
import LedgerModal from "../../../components/modal/LedgerModal";
export default function PurchaseProductScreen() {
  const [openCreateVendorModal, setOpenCreateVendorModal] = useState(false);
  const [openLedgerModal, setOpenLedgerModal] = useState(false);
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Rajesh Kumar",
        company: "Kumar Traders Pvt. Ltd.",
        category: "Electronics Supplier",
        mobile: "9876543210",
        email: "rajesh.kumar@example.com",
        gstin: "27AAECK1234F1Z5",
        price: "-",
        stock: "-",
      },
      {
        id: 2,
        name: "Aisha Patel",
        company: "Patel Textiles",
        category: "Clothing Manufacturer",
        mobile: "9123456780",
        email: "aisha.patel@example.com",
        gstin: "24AABCP1234M1Z9",
        price: "-",
        stock: "-",
      },
      {
        id: 3,
        name: "Mohammed Usman",
        company: "Usman Footwear Distributors",
        category: "Footwear Supplier",
        mobile: "9988776655",
        email: "usman.footwear@example.com",
        gstin: "29AACCU5678D1Z2",
        price: "-",
        stock: "-",
      },
      {
        id: 4,
        name: "Simran Kaur",
        company: "Kaur Home Essentials",
        category: "Household Goods",
        mobile: "9876501234",
        email: "simran.kaur@example.com",
        gstin: "07AAACK4321L1Z3",
        price: "-",
        stock: "-",
      },
      {
        id: 5,
        name: "Vikram Sharma",
        company: "Sharma Construction Supplies",
        category: "Construction Materials",
        mobile: "9090909090",
        email: "vikram.sharma@example.com",
        gstin: "09ABCDF9876A1Z1",
        price: "-",
        stock: "-",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 90 },
      { accessorKey: "name", header: "Vendor Name" },
      { accessorKey: "company", header: "Company" },
      { accessorKey: "category", header: "Category" },
      { accessorKey: "mobile", header: "Mobile" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "gstin", header: "GSTIN" },

      // 👉 Ledger comes first
      {
        header: "Ledger",
        accessorKey: "ledger",
        size: 40,
        Cell: ({ row }) => (
          <button
            onClick={() => setOpenLedgerModal(true)}
            title="View Ledger"
            className="px-3 py-2 text-sm bg-indigo-100 rounded hover:bg-indigo-200 cursor-pointer"
          >
            <Eye color="indigo" size={18} />
          </button>
        ),
      },

      {
        header: "Actions",
        accessorKey: "actions",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              onClick={() => console.log("Edit:", row.original)}
              className="px-3 py-2 text-sm bg-green-100 rounded hover:bg-green-200 cursor-pointer"
            >
              <SquarePen color="green" size={18} />
            </button>
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
        <h1 className="text-xl font-semibold ">Purchase Product List</h1>
        <div className="flex gap-3">
          <div
            className="w-[150px] bg-black text-white py-2 px-1 rounded  text-[14px] font-semibold transition text-center border-radius-[50px] cursor-pointer"
            onClick={() => setOpenCreateVendorModal(true)}
          >
            Create Purchase
          </div>
          {openCreateVendorModal && (
            <CreateVendorModal
              onClose={() => setOpenCreateVendorModal(false)}
            />
          )}
        </div>
      </div>

      <MaterialReactTable table={table} />

      {openLedgerModal && (
        <LedgerModal onClose={() => setOpenLedgerModal(false)} />
      )}
    </div>
  );
}
