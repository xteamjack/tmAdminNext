import JobClosureGraph from "@/components/dashboard/job-closure-graph";
import DashboardPanel from "@/components/dashboard/panel";
import React from "react";

const Dashboard = () => {
  return (
    <div className="px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="space-y-4">
          <DashboardPanel heading="Clients" metric="10" />
        </section>
        <section className="space-y-4">Jobs</section>
        <section className="space-y-4">Candidates</section>
      </div>

      <div>
        <JobClosureGraph />
      </div>
    </div>
  );
};

export default Dashboard;
