"use client";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import React, { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="background-light850_dark100 relative h-screen overflow-auto w-full">
      <Navbar />
      <div className="relative flex ">
        <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-1 flex-col pb-5 pt-20 max-md:pb-16  md:px-8 max-md:px-4 overflow-y-auto">
          <div className="mx-auto w-full ">{children}</div>
        </div>
        <RightSidebar />
      </div>
    </main>
  );
}

export default Layout;
