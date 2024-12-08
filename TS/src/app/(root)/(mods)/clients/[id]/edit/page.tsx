import React from "react";

const ClientEditPage = async ({ params }) => {
  return <div>Edit Client : {(await params).id}</div>;
};

export default ClientEditPage;
