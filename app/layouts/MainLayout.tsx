import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="relative w-screen h-screen">
        <Image
          src="/Main Show BG.png"
          alt="hero"
          fill
          className="object-cover"
        />
        {/* <Navbar/>  */}
        <main>{children}</main>
      </div>
    );
}