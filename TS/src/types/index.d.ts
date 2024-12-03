declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface ActiveJobsBoxProps {
  clients: Clients[];
  activeClients: number;
  activeJobs: number;
}

declare interface DoughnutChartProps {
  clients: Clients[];
}