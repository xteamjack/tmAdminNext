import React from "react";

const DashboardPanel = ({ heading, metric }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{heading}</h1>
      <h3 className="text-xl font-bold">{metric}</h3>
    </div>
  );
};

export default DashboardPanel;
