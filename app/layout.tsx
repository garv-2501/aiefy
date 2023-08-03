import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Import from clerk for authentication
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aiefy",
  description:
    "Get all the latest AI tools at your fingertips! Sign up now for free!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
