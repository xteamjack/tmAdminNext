import HeaderBox from "@/components/common/header-box";
import MetricsTotalBalanceBox from "@/components/common/metric-total-bal";
import RecentActivity from "@/components/common/recent-activity";
import RightSidebar from "@/components/common/right-sidebar";
import { Clients, ClientData } from "@/data/clients";
import { LoggedIn } from "@/data/loggedIn";
import React from "react";

const HomePage = () => {
  // ToDo - Hardcoded data
  const loggedIn = LoggedIn;
  const clients = Clients;
  const clientData = ClientData;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <MetricsTotalBalanceBox
            clients={clients}
            activeClients={clientData?.activeClients}
            activeJobs={clientData?.activeJobs}
          />
        </header>

        <RecentActivity />
      </div>

      <RightSidebar />
    </section>
  );
};

export default HomePage;
