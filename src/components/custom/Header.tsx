"use client";
import Image from "next/image";
import React, { SyntheticEvent } from "react";
import {
  HomeIcon,
  LaughIcon,
  BriefcaseBusiness,
  Contact,
  MenuIcon,
  Briefcase,
  Download,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { handleScroll } from "@/hooks/handleInnerLink";

const Header = () => {
  const handleInnerLinks = (e: SyntheticEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      handleScroll(element);
    }
  };

  return (
    <nav className="w-full fixed h-max lg:px-12 md:px-8 px-2 py-4 flex flex-row justify-between  backdrop-blur-md text-[#4A4A65] text-base items-center shadow-lg shadow-gray-500 transition-all duration-100 ease-linear z-10">
      <div className="flex flex-row items-center justify-start gap-2 font-bold  hover:text-violet-500">
        <Image
          src="/header_profile_img.png"
          alt="souvik_hazra"
          width={50}
          height={50}
          className="h-full rounded-full bg-cover bg-top  border-violet-500 border-2"
        />
        <p className="cursor-pointer">
          <span className="tracking-wider">SOUVIK</span>
          <span className="tracking-wider"> HAZRA</span>
        </p>
      </div>
      <div>
        <div
          className={`hidden lg:flex flex-row justify-end gap-4 font-bold tracking-widest text-sm `}
        >
          <div className="cursor-pointer mx-4 ">
            <a
              href="#homeSection"
              onClick={(e) => handleInnerLinks(e, "homeSection")}
              className="flex flex-row items-center gap-1"
            >
              <HomeIcon className="h-[1rem]" />
              <span>HOME</span>
            </a>
          </div>
          <div className="cursor-pointer mx-4">
            <a
              href="#aboutSection"
              onClick={(e) => handleInnerLinks(e, "aboutSection")}
              className="flex flex-row items-center gap-1"
            >
              <LaughIcon className="h-[1rem]" />
              <span>ABOUT</span>
            </a>
          </div>
          <div className="cursor-pointer mx-4 ">
            <a
              href="#experienceSection"
              onClick={(e) => handleInnerLinks(e, "experienceSection")}
              className="flex flex-row items-center gap-1"
            >
              <Briefcase className="h-[1rem]" />
              <span>EXPERIENCE</span>
            </a>
          </div>
          <div className="cursor-pointer mx-4 ">
            <a
              href="#projectsSection"
              onClick={(e) => handleInnerLinks(e, "projectsSection")}
              className="flex flex-row items-center gap-1"
            >
              <BriefcaseBusiness className="h-[1rem]" />
              <span>PROJECTS</span>
            </a>
          </div>
          <div className="cursor-pointer mx-4 ">
            <a
              href="#contactSection"
              onClick={(e) => handleInnerLinks(e, "contactSection")}
              className="flex flex-row items-center gap-1"
            >
              <Contact className="h-[1rem]" />
              <span>CONTACT</span>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-end mr-2 lg:hidden ">
          <Sheet>
            <SheetTrigger>
              <div className="border border-black p-1 rounded-md">
                <MenuIcon />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-[#FEFEFE]">
              <SheetHeader>
                <SheetTitle className="text-[#4A4A65] mb-4">
                  <div className="flex flex-row items-center justify-start gap-2 font-bold  hover:text-violet-500">
                    <Image
                      src="/header_profile_img.png"
                      alt="souvik_hazra"
                      width={50}
                      height={50}
                      className="h-full rounded-full bg-cover bg-top  border-violet-500 border-2"
                    />
                    <p className="cursor-pointer">
                      <span className="tracking-wider">SOUVIK</span>
                      <span className="tracking-wider"> HAZRA</span>
                    </p>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div>
                <div className="cursor-pointer py-4 border border-x-0 border-t-0 pb-2 font-bold text-[#4A4a65] hover:bg-gray-300 transition-all ease-linear duration-200 rounded-md">
                  <a
                    href="#homeSection"
                    onClick={(e) => handleInnerLinks(e, "homeSection")}
                    className="flex flex-row items-center gap-1 text-sm w-full mb-1 px-2 tracking-wider"
                  >
                    <HomeIcon className="h-[1rem]" />
                    <span>HOME</span>
                  </a>
                </div>
                <div className="cursor-pointer py-4 border border-x-0 border-t-0 pb-2 font-bold text-[#4A4a65] hover:bg-gray-300 transition-all ease-linear duration-200 rounded-md">
                  <a
                    href="#aboutSection"
                    onClick={(e) => handleInnerLinks(e, "aboutSection")}
                    className="flex flex-row items-center gap-1 text-sm w-full mb-1 px-2 tracking-wider"
                  >
                    <LaughIcon className="h-[1rem]" />
                    <span>ABOUT</span>
                  </a>
                </div>
                <div className="cursor-pointer py-4 border border-x-0 border-t-0 pb-2 font-bold text-[#4A4a65] hover:bg-gray-300  transition-all ease-linear duration-200 rounded-md">
                  <a
                    href="#experienceSection"
                    onClick={(e) => handleInnerLinks(e, "experienceSection")}
                    className="flex flex-row items-center gap-1 text-sm w-full mb-1 px-2 tracking-wider"
                  >
                    <Briefcase className="h-[1rem]" />
                    <span>EXPERIENCE</span>
                  </a>
                </div>
                <div className="cursor-pointer py-4 border border-x-0 border-t-0 pb-2 font-bold text-[#4A4a65] hover:bg-gray-300  transition-all ease-linear duration-200 rounded-md">
                  <a
                    href="#projectsSection"
                    onClick={(e) => handleInnerLinks(e, "projectsSection")}
                    className="flex flex-row items-center gap-1 text-sm w-full mb-1 px-2 tracking-wider"
                  >
                    <BriefcaseBusiness className="h-[1rem]" />
                    <span>PROJECTS</span>
                  </a>
                </div>
                <div className="cursor-pointer py-4 border border-x-0 border-t-0 pb-2 font-bold text-[#4A4a65] hover:bg-gray-300  transition-all ease-linear duration-200 rounded-md">
                  <a
                    href="#contactSection"
                    onClick={(e) => handleInnerLinks(e, "contactSection")}
                    className="flex flex-row items-center gap-1 text-sm w-full mb-1 px-2 tracking-wider"
                  >
                    <Contact className="h-[1rem]" />
                    <span>CONTACT</span>
                  </a>
                </div>
              </div>
              <TooltipProvider>
                <div className="flex flex-row justify-center items-center mt-4">
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-2 mx-2 border rounded-sm cursor-pointer bg-gray-100">
                        <a
                          href="https://www.linkedin.com/in/souvik-hazra-202321252/"
                          target="_blank"
                        >
                          <Image
                            src="/linkedin.svg"
                            height={30}
                            width={30}
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-2 mx-2 border rounded-sm cursor-pointer bg-gray-100 ">
                        <a href="https://github.com/Mr-R-e-X" target="_blank">
                          <Image
                            src="/github.svg"
                            height={30}
                            width={30}
                            alt="github"
                          />
                        </a>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-2 mx-2 border rounded-sm cursor-pointer bg-gray-100">
                        <a
                          href="mailto:souvikhazra151@gmail.com"
                          target="_blank"
                        >
                          <Image
                            src="/mail.svg"
                            height={30}
                            width={30}
                            alt="mail"
                          />
                        </a>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Email</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-2 mx-2 border rounded-sm cursor-pointer bg-gray-100">
                        <a href="/SOUVIK_HAZRA.pdf" download>
                          <Download height={30} width={30} />
                        </a>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Resume</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
