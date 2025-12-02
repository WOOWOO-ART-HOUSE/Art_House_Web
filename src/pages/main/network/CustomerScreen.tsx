import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import LedgerModal from "../../../components/modal/LedgerModal";
import CreateCustomerModal from "../../../components/modal/CreateCustomerModal";
export default function CustomerScreen() {
  const [openCreateCustomerModal, setOpenCreateCustomerModal] = useState(false);
  const [openLedgerModal, setOpenLedgerModal] = useState(false);
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Ram",
        mobile: "9876543210",
        email: "ram123@gmail.com",
        address: "Nehru Nagar, Bhilai",
        city: "Bhilai",
        state: "Chhattisgarh",
        pincode: "491107",
      },
      {
        id: 2,
        name: "Mohan",
        mobile: "9876543210",
        email: "mohan123@gmail.com",
        address: "Nehru Nagar, Bhilai",
        city: "Bhilai",
        state: "Chhattisgarh",
        pincode: "491107",
      },
      {
        id: 3,
        name: "Sohan",
        mobile: "9876543210",
        email: "sohan123@gmail.com",
        address: "Station Road, Durg",
        city: "Durg",
        state: "Chhattisgarh",
        pincode: "491107",
      },
      {
        id: 4,
        name: "Chintu",
        mobile: "9876543210",
        email: "chintu123@gmail.com",
        address: "Station Road, Durg",
        city: "Durg",
        state: "Chhattisgarh",
        pincode: "491107",
      },
      {
        id: 5,
        name: "Mintu",
        mobile: "9876543210",
        email: "mintu123@gmail.com",
        address: "Civic Center, Bhilai",
        city: "Bhilai",
        state: "Chhattisgarh",
        pincode: "491107",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 50 },
      { accessorKey: "name", header: "Customer Name" },
      { accessorKey: "mobile", header: "Mobile", size: 60 },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "address", header: "Address" },
      { accessorKey: "city", header: "City", size: 60 },
      { accessorKey: "state", header: "State", size: 60 },
      { accessorKey: "pincode", header: "Pincode", size: 60 },
      {
        header: "Ledger",
        accessorKey: "ledger",
        size: 30,
        Cell: ({ row }) => (
          <button
            onClick={() => setOpenLedgerModal(true)}
            title="View Ledger"
            className="px-3 py-2 bg-indigo-100 rounded hover:bg-indigo-200 cursor-pointer"
          >
            <Eye size={18} className="text-indigo-600" />
          </button>
        ),
      },
      {
        header: "Actions",
        accessorKey: "actions",
        size: 60,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {/* Edit */}
            <button
              onClick={() => console.log("Edit:", row.original)}
              className="px-3 py-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
            >
              <SquarePen size={18} className="text-green-600" />
            </button>

            {/* Delete */}
            <button
              onClick={() => console.log("Delete:", row.original)}
              className="px-3 py-2 bg-red-100 rounded hover:bg-red-200 cursor-pointer"
            >
              <Trash2 size={18} className="text-red-600" />
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
        <h1 className="text-xl font-semibold ">Customers List</h1>
        <div className="flex gap-3">
          <div
            className="w-[170px] bg-black text-white py-2 px-1 rounded  text-[14px] font-semibold transition text-center border-radius-[50px] cursor-pointer"
            onClick={() => setOpenCreateCustomerModal(true)}
          >
            Create New Customer
          </div>
          {openCreateCustomerModal && (
            <CreateCustomerModal
              onClose={() => setOpenCreateCustomerModal(false)}
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
