import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    const userExists = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (userExists) return userExists;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
