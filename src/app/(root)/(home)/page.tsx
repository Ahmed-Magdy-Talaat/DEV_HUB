import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="mt-[-10px] flex flex-row justify-between text-dark300_light900 w-full max-md:mx-auto items-center">
        <div className="h3-bold max-md:h3-bold font_spaceGrotesk text-primary-500 ">
          All Questions
        </div>
        <Link href="ask-question">
          <Button className="primary-gradient text-white max-md:text-base py-1 px-2">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-5 w-[90%] max-md:w-full mx-auto flex flex-row gap-2 items-center px-2 py-0 border-[0.5px] border-slate-200 dark:border-slate-700 rounded-lg">
        <div className=" dark:text-light-900">
          <Image
            src="/assets/icons/search.svg"
            alt="Search Icon"
            height={18}
            width={18}
          />
        </div>
        <Input
          className=" p-0 bg-inherit  text-dark-100 dark:text-light-900 dark:border-slate-500 border-none focus:border-0 focus:outline-none
          "
          placeholder="Search for Questions"
        />
      </div>
    </div>
  );
}
