import { SignIn } from "@clerk/nextjs";
import backgroundImage from "../../(assets)/background.png";
import { url } from "inspector";

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-200">
      <div
        className=" flex flex-col items-center justify-center h-screen bg-cover"
        //   style={{
        //     backgroundImage: `url(${backgroundImage})`,
        //     backgroundSize: "cover",
        //   }}
      >
        {/* Your h1 heading */}
        <h1 className="text-5xl font-bold mb-10">Next-Gen AI Playground</h1>
        <h2 className=" text-3xl font-semibold mb-10">
          Explore the World of Cutting-Edge Tools.
        </h2>

        {/* Your centered div */}
        <div className="flex items-center justify-center p-4">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
