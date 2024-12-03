"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "jobProfile",
    header: "Job Profile",
  },
];
