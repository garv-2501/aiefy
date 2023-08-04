"use client";

import Link from "next/link";
import Image from "next/image";
import { Chivo_Mono } from "next/font/google";

// shadCN and icon imports:
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
} from "lucide-react";

// Fonts:
const ChivoMono = Chivo_Mono({
  weight: "600",
  subsets: ["latin"],
});

// Routes for the sidebar:
const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    colour: "text-blue-500",
  },
  {
    name: "Chat-GPT",
    href: "/chatgpt",
    icon: MessageSquare,
    colour: "text-green-500",
  },
  {
    name: "Dall-E",
    href: "/dalle",
    icon: ImageIcon,
    colour: "text-yellow-500",
  },
  {
    name: "Video GEN",
    href: "/videogeneration",
    icon: VideoIcon,
    colour: "text-yellow-500",
  },
];

export default function Sidebar() {
  return (
    <div className=" space-y-4 flex flex-col h-full py-6 bg-slate-800 text-white">
      <div className=" px-2 py-2 flex-1">
        {/* Link to dashboard on top */}
        <Link href={"/dashboard"} className=" flex items-center pl-4 mb-14">
          <div className=" relative w-8 h-8">
            <Image fill alt="Logo" src={"/logo-short.png"}></Image>
          </div>
          <h1
            className={cn("text-2xl font-semibold ml-2", ChivoMono.className)}
          >
            Aiefy
          </h1>
        </Link>
        {/* Main dashboard links: */}
        <div className=" space-y-1 ">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1 ">
                <route.icon className={cn(" w-5 h-5 mr-4 ", route.colour)} />
                <h2 className=" text-lg">{route.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
