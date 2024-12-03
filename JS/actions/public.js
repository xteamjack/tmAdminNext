"use server";

import { unstable_cache } from "next/cache";

export const get_daily_prompt = unstable_cache(
  async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      const data = await res.json();
      return data.slip.advice;
    } catch (error) {
      return "What's on your mind?";
    }
  },
  ["daily-prompt"],
  {
    revalidate: 1,
    tags: ["daily-prompt"],
  }
);
