"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ActionBox from "./ActionBox";

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const headerPaths = {
  dashboard: {},
  clients: {
    icon: "/icons/modules/clients.svg",
    name: "Clients",
    actions: {
      list: "List of clients",
      create: "Create New client",
      edit: "Edit client",
    },
  },
  jobs: {},
  candidates: {},
  settings: {},
};

const HeaderBox = ({
  type, // dashboard | module
  name, // candidate
  action = "list", // View | Edit | Create |
  backTo = null,
}: HeaderBoxProps) => {
  const router = useRouter();

  return (
    <>
      <div>
        <button
          type="button"
          className="flex gap-1 mb-1"
          onClick={() => router.back()}
        >
          <Image
            src="/icons/actions/back.svg"
            width={24}
            height={24}
            alt="back"
          />
          Back
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            className="m-2"
            src="/icons/func/candidates.svg"
            alt="Candidates"
            width={48}
            height={48}
          />
          <div className="border-l-2 border-slate-300 p-1">
            <h1 className="text-2xl font-bold">Candidates</h1>
            <h2 className="text-lg font-semibold">List of candidates</h2>
          </div>
        </div>

        <div>
          <ActionBox />
        </div>
      </div>
    </>
  );
};

export default HeaderBox;
