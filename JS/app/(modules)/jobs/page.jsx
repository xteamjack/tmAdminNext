import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const JobListingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl px-4 py-8">Jobs List</h1>
      <div className="flex items-end justify-end space-x-2">
        <Link href="/jobs/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Job
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobListingPage;
