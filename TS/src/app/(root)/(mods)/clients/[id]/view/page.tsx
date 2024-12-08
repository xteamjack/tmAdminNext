"use client";

import { useParams } from "next/navigation";
import React from "react";

const ClientViewPage = () => {
  const params = useParams();

  return <div>View Client: {params.id}</div>;
};

export default ClientViewPage;
