import Link from "next/link";
import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const NewFormLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/dashboard"
        className="text-sm text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
      >
        &#x25c0; Back to Dashboard
      </Link>
      <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
};

export default NewFormLayout;
