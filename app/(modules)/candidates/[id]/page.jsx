import { getCandidate } from "@/actions/candidate";
import React from "react";

const DisplayCandidatesPage = async ({ params }) => {
  const candidate = (await getCandidate(params.id)).data.candidate;
  console.log(candidate);
  return (
    <>
      <div className="text-sm italic">{params.id}</div>
      <div className="text-3xl bold">
        {candidate.firstName} {candidate.lastName}
      </div>
      <div className="text-xl">{candidate.jobProfile}</div>
      <hr />
    </>
  );
};

export default DisplayCandidatesPage;
