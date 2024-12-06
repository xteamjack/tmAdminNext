import React from "react";

const ClientViewPage = async ({ params }) => {
  return <div>View Client: {await params.id}</div>;
};

export default ClientViewPage;
