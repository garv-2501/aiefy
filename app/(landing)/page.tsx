// imports from shadcn/ui
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <h1 className=" text-5xl">This is the landing page (unprotected)</h1>
      <Button variant={"default"} className=" ml-20 ">
        Click Me
      </Button>
    </>
  );
}
