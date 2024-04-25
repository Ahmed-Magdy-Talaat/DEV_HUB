import Image from "next/image";
import React from "react";

function RightSidebar() {
  const questions = [
    "What is next js ?",
    "what is react js ?",
    "what is node js and express js, what is Nextjs and what is c# ?",
  ];
  const tags = [
    {
      name: "Next Js",
      number: 31,
    },
    {
      name: "React Js",
      number: 131,
    },
    {
      name: "Next Js",
      number: 31,
    },
  ];
  return (
    <div
      className={`pt-20 left-0 top-0 sticky h-screen w-[25%] background-light900_dark200 overflow-y-auto overflow-x-hidden max-sm:hidden shadow-lg `}
    >
      <div className="text-dark300_light900 w-[90%] m-auto flex flex-row gap-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="font-spaceGrotesk h3-bold text-primary-500 ">
              Top Questions
            </div>
            <div className="flex flex-col items-start gap-3  w-full">
              {questions.map((question, index) => {
                return (
                  <div
                    key={index}
                    className=" text-[14px] flex flex-row justify-between items-center w-full"
                  >
                    <div>{question}</div>
                    <Image
                      src="/assets/icons/chevron-right.svg"
                      className="invert-colors mx-2"
                      width={15}
                      height={15}
                      alt="chevron"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <div className="font-spaceGrotesk h3-bold text-primary-500 ">
                Popular Tags
              </div>
              <div className="flex flex-col items-start gap-3  w-full">
                {tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className=" text-[14px] flex flex-row justify-between items-center w-full"
                    >
                      <div className="background-light700_dark400 rounded-lg px-2 py-1">
                        {tag.name}
                      </div>
                      <div>{tag.number}+</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
