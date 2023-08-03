// imports from shadcn/ui
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className=" text-5xl">This is the landing page (unprotected)</h1>
      <Link href="sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="sign-up">
        <Button>Register</Button>
      </Link>
    </>
  );
}
