"use client";

import { getCandidates } from "@/actions/candidate";
// import DataTable from "@/components/generic/data-table";
import React from "react";
import { useEffect, useState } from "react";

// import { columns } from "./columns";
import useFetch from "@/hooks/use-fetch";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// const candidateViewSchema = {
//   id: String,
//   firstName: String,
//   // status: "pending" | "processing" | "success" | "failed"
//   lastName: String,
//   location: String,
//   jobProfile: String,
// };

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

const ListCandidatesPage = () => {
  // const candidates = getCandidates();

  // const {
  //   loading: actionLoading,
  //   fn: actionFn,
  //   data: actionResult,
  // } = useFetch(getCandidates);

  // const a = useFetch(getCandidates);
  // const candidates = useFetch(getCandidates);

  // useEffect(() => {
  //   actionFn();
  // });

  // useEffect(() => {
  //   fetch("/api/profile-data")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // console.log(actionResult);

  // const table = useReactTable({
  //   data: actionResult,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  return (
    <div className="p-6">
      <h1 className="text-3xl px-4 py-8">Candidates List</h1>
      <div className="flex items-end justify-end space-x-2">
        <Link href="/candidates/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Candidate
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ListCandidatesPage;
