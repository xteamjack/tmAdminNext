"use client";

import React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { resolve } from "styled-jsx/css";
import { candidateSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { BarLoader } from "react-spinners";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { createCandidate } from "@/actions/candidate";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const NewCandidatePage = () => {
  const {
    loading: actionLoading,
    fn: actionFn,
    data: actionResult,
  } = useFetch(createCandidate);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      location: "",
      jobProfile: "",
    },
  });

  const isLoading = actionLoading;

  useEffect(() => {
    if (actionResult && !actionLoading) {
      router.push("/candidates");
      toast.success(`Candidate created successfully`);
    }
  }, [actionResult, actionLoading]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    actionFn({ ...data });
  });

  return (
    <div className="py-8">
      <form className="space-y-2 mx-auto" onSubmit={onSubmit}>
        <h1 className="text-5xl md:text-6xl gradient-title font-bold">
          New Candidate
        </h1>

        {isLoading && <BarLoader color="orange" width={"100%"} />}

        <div>
          <label>First Name</label>
          <Input
            {...register("firstName")}
            placeholder="Candidate first name"
            className={`py-5 md:text-md ${
              errors?.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <Input
            {...register("lastName")}
            placeholder="Candidate last name"
            className={`py-5 md:text-md ${
              errors?.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Location</label>
          <Input
            {...register("location")}
            placeholder="Candidate preferred job location"
            className={`py-5 md:text-md ${
              errors?.location ? "border-red-500" : ""
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label>Job Profile</label>
          <Input
            {...register("jobProfile")}
            placeholder="Candidate job profile"
            className={`py-5 md:text-md ${
              errors?.jobProfile ? "border-red-500" : ""
            }`}
          />
          {errors.jobProfile && (
            <p className="text-red-500 text-sm">{errors.jobProfile.message}</p>
          )}
        </div>

        <div className="space-y-4 flex">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewCandidatePage;
