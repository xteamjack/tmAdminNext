import AnimatedCounter from "./animated-counter";
import DoughnutChart from "./doughnut-chart";

const TotalBalanceBox = ({
  clients = [],
  activeClients,
  activeJobs,
}: ActiveJobsBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart clients={clients} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Active Clients: {activeClients}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Active Jobs</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter val={activeJobs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
