"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createCandidate(data) {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    // ToDo:: Apply rate limit in future

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) throw new Error("User not found!");

    const candidate = await db.candidate.create({
      data: {
        userId: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        location: data.location,
        jobProfile: data.jobProfile,
      },
    });

    revalidatePath("/dashboard");

    return candidate;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCandidates() {
  try {
    const candidates = await db.candidate.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    console.log(candidates);
    // return candidates;
    // revalidatePath("/dashboard");
    return {
      success: true,
      data: {
        candidates: candidates,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}

export async function getCandidate(id) {
  try {
    const candidate = await db.candidate.findUnique({
      where: {
        id: id,
      },
    });
    return {
      success: true,
      data: {
        candidate: candidate,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
