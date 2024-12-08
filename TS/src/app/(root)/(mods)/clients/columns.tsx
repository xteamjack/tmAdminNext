"use client";

import UserBadge from "@/components/user/badge";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  id: string;
  code: string;
  name: string;
  desc: string;
  revenue: number;
  status: "active" | "closed";
  poc: string;
  active_jobs: number;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "code",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "revenue",
    // header: "Revenue (USD)",
    header: () => <div className="text-right">Revenue (USD)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "poc",
    header: "Lead",
    cell: ({ row }) => {
      return <UserBadge user={row.original.poc} />;
    },
  },
  {
    accessorKey: "active_jobs",
    header: "Active Jobs",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      // TODO:: Convert this table actions into a reusable component
      return (
        <div className="flex text-center font-medium gap-1">
          <Link href={`/clients/${row.original.id}/view`}>
            <Image
              src="/icons/actions/view.svg"
              width={20}
              height={20}
              alt="View"
            />
          </Link>
          <Link href={`/clients/${row.original.id}/edit`}>
            <Image
              src="/icons/actions/edit.svg"
              width={20}
              height={20}
              alt="Edit"
            />
          </Link>
          <div onClick={(e) => getConfirmation()}>
            <Image
              src="/icons/actions/delete.svg"
              width={20}
              height={20}
              alt="Delete"
            />
          </div>
        </div>
      );
    },
  },
];

//TODO:: Add delete confirmation dialog box
function getConfirmation() {
  alert("Are you sure you want to delete this client?");
}

export default columns;
