// imports from shadcn/ui
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <h1 className=" text-9xl">Dashboard page (protected)</h1>
      <Button variant={"default"} className=" ml-20 ">
        Click Me
      </Button>
    </>
  );
}
