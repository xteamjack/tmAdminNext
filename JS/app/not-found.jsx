import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p>The page you are looking for does not exist</p>
      <Link className="underline" href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
