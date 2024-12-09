import HeaderBox from "@/app/_components/HeaderBox";
import React from "react";

const CandidateViewPage = async ({ params }) => {
  const candidateId: string = (await params).id;
  return (
    <div>
      <HeaderBox bObject="Candidate" id="{candidateId}" action="View" />
      List of candidates goes here
    </div>
  );
};

export default CandidateViewPage;
