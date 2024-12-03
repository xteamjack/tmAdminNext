import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";
import { get_daily_prompt } from "@/actions/public";

export default async function Home() {
  const advice = await get_daily_prompt();
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Hello world!</h1>
      <Button variant="primary">Button!</Button>
      <br />
      <hr />
      <Link className={buttonVariants({ variant: "primary" })}>Click here</Link>
      <div>{advice}</div>
    </div>
  );
}
