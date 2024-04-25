"use client";
import { UserButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./theme/Theme";
import { Input } from "../ui/input";
import MobileNavbar from "./mobile/MobileNavbar";

function Navbar() {
  return (
    <>
      <nav className="w-full fixed  background-light900_dark200 shadow-light-300 dark:show-none  z-50 p-2 sm:px-12 flex justify-between items-center dark:shadow-none  ">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/assets/images/site-logo.svg"
            alt="Dev OverFlow"
            height={23}
            width={23}
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className="relative flex w-1/2 flex-row max-md:hidden">
          <Image
            src="/assets/icons/search.svg"
            alt="Search Icon"
            height={18}
            width={18}
            className="absolute left-[0.5rem] top-[0.75rem]"
          />
          <Input
            className=" text-dark-100 dark:text-light-900  bg-inherit px-8 dark:border-slate-500"
            placeholder="Search anything globally"
          />
        </div>
        <div className="flex flex-row items-center gap-3 ">
          <Theme />

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
