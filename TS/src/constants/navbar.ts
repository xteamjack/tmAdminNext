const teams = [
  { name: "Planetaria", logo: "P", url: "/team/planetaria" },
  { name: "Protocol", logo: "P", url: "/team/protocol" },
  { name: "Tailwind Labs", logo: "T", url: "/team/tailwind-labs" },
];

const navigation = [
  {
    name: "Projects",
    desc: "Manage your projects",
    logo: "folder",
    url: "/projects",
  },
  {
    name: "Deployments",
    desc: "Deploy your apps",
    logo: "disk",
    url: "/deployments",
  },
  {
    name: "Activity",
    desc: "Recent activity",
    logo: "radio",
    url: "/activity",
  },
  { name: "Domains", desc: "Manage domains", logo: "globe", url: "/domains" },
  { name: "Usage", desc: "View usage stats", logo: "chart-bar", url: "/usage" },
  {
    name: "Settings",
    desc: "Configure settings",
    logo: "cog",
    url: "/settings",
  },
];

export { teams, navigation };
