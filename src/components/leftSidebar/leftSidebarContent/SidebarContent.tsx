"use client";
import React from "react";
import { links } from "../../../../constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarContent = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full mt-1 pt-4 gap-6 ">
      {links.map((navLink) => {
        const { link, label, icon } = navLink;
        console.log(pathname);
        const isActive =
          (pathname.includes(link) && link.length > 1) || link === pathname;
        return (
          <Link
            key={label}
            href={link}
            className={`p-3 rounded-lg  ${
              isActive && "primary-gradient text-light-900 base-medium"
            }`}
          >
            <div className="flex flex-row gap-5 ">
              <div
                className={`${isActive ? "" : "invert-colors"} ${
                  !isOpen ? "mx-auto" : ""
                } `}
              >
                <Image
                  src={icon}
                  className="primary-text-gradient"
                  alt={label}
                  width={25}
                  height={25}
                />
              </div>
              <div className={`${!isOpen ? "hidden" : "visible"}`}>{label}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarContent;
