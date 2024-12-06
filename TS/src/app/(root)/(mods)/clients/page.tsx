import { DataTable } from "@/components/common/data-table";
import HeaderBox from "@/components/common/header-box";
import React from "react";
import { columns } from "./columns";
// import { clientList as data } from "@/data/clients";
import { getAll } from "@/actions/clients";

const ClientsPage = async () => {
  const dbResponse = await getAll();
  const data = dbResponse.data.clients.records;
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="transactions">
        <div className="transactions-header">
          <HeaderBox title="Clients" subtext="List of registered clients." />
        </div>
      </div>

      <section>
        {/* <div>Found: {data.length}</div> */}
        <DataTable columns={columns} data={data} />
      </section>
    </div>
  );
};

export default ClientsPage;
