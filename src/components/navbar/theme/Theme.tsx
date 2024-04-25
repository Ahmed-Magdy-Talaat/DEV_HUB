/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { modes } from "../../../../constants";

interface IMode {
  label: string;
  value: string;
  icon: string;
}

function Theme() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <Menubar className="relative border-0 border-none bg-transparent shadow-none outline-none">
        <MenubarMenu>
          <MenubarTrigger className="foucs:bg-light-900 data-[state=open]:bg-light dark:data-[state=open]:bg-dark-200 relative border-0 border-none bg-transparent shadow-none outline-none ">
            {theme !== "dark" ? (
              <Image
                src="/assets/icons/sun.svg"
                alt="sun"
                width={20}
                height={20}
                className="active-theme"
              />
            ) : (
              <Image
                src="/assets/icons/moon.svg"
                className="active-theme"
                alt="sun"
                width={20}
                height={20}
              />
            )}
          </MenubarTrigger>
          <MenubarContent className="dark:border-dark-400 bg-white dark:bg-dark-300 absolute right-[-4rem] mt-2 min-w-[120px] rounded border p-2 flex flex-col gap-0 z-50  ">
            {modes.map((modeDetails: IMode) => {
              const { value, label, icon } = modeDetails;
              return (
                <div key={label}>
                  <MenubarItem
                    className="my-0 py-1"
                    onClick={() => {
                      setTheme(value);
                      if (value !== "system") {
                        localStorage.theme = value;
                      } else {
                        localStorage.theme = "light";
                      }
                    }}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <div>
                        <Image
                          src={icon}
                          alt={label}
                          width={16}
                          height={16}
                          className={`${theme === value ? "active-theme" : ""}`}
                        />
                      </div>
                      <div
                        className={`font-semibold ${
                          theme === value
                            ? "text-primary-500"
                            : "text-dark100_light900"
                        }`}
                      >
                        {label}
                      </div>
                    </div>
                  </MenubarItem>
                  <MenubarSeparator />
                </div>
              );
            })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default Theme;
