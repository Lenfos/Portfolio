import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavComponents";

export const metadata: Metadata = {
  title: "Pierre Vanhove",
  description: "Portfolio of Pierre Vanhove | Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#5D002E]`}
      >
      <div className="w-screen fixed z-100 flex justify-center items-center">
          <NavBar/>
      </div>
      <main>{children}</main>
      </body>
    </html>
  );
}
