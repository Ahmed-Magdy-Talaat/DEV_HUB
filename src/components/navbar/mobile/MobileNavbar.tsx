"use client";
import React from "react";
import { links } from "../../../../constants";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full mt-16 pt-4 gap-10 ">
      {links.map((navLink) => {
        const { link, label, icon } = navLink;
        console.log(pathname);
        const isActive =
          (pathname.includes(link) && link.length > 1) || link === pathname;
        return (
          <Link
            key={label}
            href={link}
            className={`p-3 rounded-lg py-4 text-dark300_light900 ${
              isActive &&
              "primary-gradient text-light-900 base-medium base-bold"
            }`}
          >
            <div className="flex flex-row gap-5">
              <div>
                <Image src={icon} alt={label} width={25} height={25} />
              </div>
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

function MobileNavbar() {
  return (
    <div className="relative sm:hidden text-dark300_light900">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menu"
            width={25}
            height={25}
            className="active-theme"
          />
        </SheetTrigger>
        <SheetContent className="background-light900_dark200" side="left">
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

          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <div className="absolute bottom-5 w-[85%]">
            <SignedOut>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link href="/sign-in">
                    <Button className="w-[100%] px-2 py-2 background-light800_dark400 text-center">
                      <span className="primary-text-gradient text-base">
                        Log In
                      </span>
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/sign-up">
                    <Button className="w-[100%] px-2 py-2 background-light800_dark400 text-center">
                      <span className="text-dark200_light800 text-base">
                        Sign Up
                      </span>
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SignedOut>
          </div>
        </SheetContent>
      </Sheet>

      {/* <div className="w-1/3 lg:hidden max-md:w-[60%] fixed top-[6%] z-30 background-light900_dark200 h-screen">
        <div className="flex flex-col h-full mt-16 pt-4 gap-10 ">
          {links.map((navLink) => {
            const { link, label, icon } = navLink;
            return (
              <Link
                key={label}
                href={link}
                className="p-3 bg-primary-500 rounded-lg py-4"
              >
                <div className="flex flex-row gap-5">
                  <div>
                    <Image src={icon} alt={label} width={25} height={25} />
                  </div>
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </> */}
    </div>
  );
}

export default MobileNavbar;
