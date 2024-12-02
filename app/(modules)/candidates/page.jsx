import { getCandidates } from "@/actions/candidate";
import React from "react";

const Candidates = async () => {
  const candidates = await getCandidates();

  console.log(candidates);

  return (
    <div>
      <h1 className="text-3xl px-4 py-8">Candidates List</h1>
      <div></div>
    </div>
  );
};

export default Candidates;
