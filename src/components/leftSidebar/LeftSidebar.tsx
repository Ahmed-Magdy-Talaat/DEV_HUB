import Link from "next/link";
import SidebarContent from "./leftSidebarContent/SidebarContent";
import { Button } from "../ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

interface ISidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function LeftSidebar({ isOpen, setIsOpen }: ISidebarProps) {
  console.log(isOpen);
  return (
    <div
      className={`pt-2 left-0 top-0 sticky h-screen background-light900_dark200 overflow-y-auto overflow-x-hidden max-sm:hidden ${
        !isOpen ? "mx-auto w-20 px-1" : "xl:w-[18%] lg:w-[25%]"
      } ease-in-out duration-500 border-r`}
    >
      <div className="text-dark300_light900 xl:w-[90%] lg:w-[95%] m-auto">
        <div className=" pt-2">
          <div
            className="mt-16 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/assets/icons/hamburger.svg"
              alt="sign-up"
              width={25}
              height={25}
              className="invert-colors"
            />
          </div>

          <div>
            <SidebarContent isOpen={isOpen} />
          </div>

          <div className=" pt-6">
            <SignedOut>
              <div className="flex flex-col gap-6">
                <div>
                  <Link href="/sign-in">
                    <Button
                      className={`w-[100%] px-2 max-lg:hidden py-2 background-light700_dark400 text-center ${
                        !isOpen ? "hidden" : "visible"
                      }`}
                    >
                      <span className="primary-text-gradient text-base">
                        Log In
                      </span>
                    </Button>
                    <Button
                      className={`w-[100%] px-2 ${
                        isOpen ? "hidden" : "visible"
                      } py-2 background-light700_dark400 text-center`}
                    >
                      <Image
                        src="/assets/icons/account.svg"
                        alt="sign-up"
                        width={20}
                        height={20}
                        className="invert-colors"
                      />
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link href="/sign-up">
                    <Button
                      className={`w-[100%] px-2 max-lg:hidden py-2 background-light700_dark400 text-center ${
                        !isOpen ? "hidden" : "visible"
                      }`}
                    >
                      <span className="text-dark200_light800 text-base">
                        Sign Up
                      </span>
                    </Button>

                    <Button
                      className={`w-[100%] px-2 ${
                        isOpen ? "hidden" : "visible"
                      } py-2 background-light700_dark400 text-center`}
                    >
                      <Image
                        src="/assets/icons/sign-up.svg"
                        alt="sign-up"
                        width={20}
                        height={20}
                        className="invert-colors"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </SignedOut>

            <div className="p-3 pt-12 pb-3">
              <SignedIn>
                <Link href="/logout">
                  <div className="flex flex-row items-center gap-5 max-lg:m-auto">
                    <FiLogOut className="w-[25px] h-[25px] max-lg:m-auto" />
                    <span
                      className={`${
                        !isOpen ? "hidden" : "visible"
                      } text-lg text-primary-500`}
                    >
                      Log Out
                    </span>
                  </div>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSidebar;
