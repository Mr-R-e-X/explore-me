import { aboutMesubtitle } from "@/constants/constants";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-10 py-16 flex flex-col md:flex-row md:justify-between justify-center md:items-start items-center gap-5">
        <div className="px-4">
          <h1 className="text-lg text-center md:text-start md:text-xl mb-4 font-bold tracking-wider">
            SOUVIK HAZRA
          </h1>
          <p className="ml-4 text-center md:text-start font-semibold">
            {aboutMesubtitle}
          </p>
        </div>
        <div className="px-4 mt-4 md:mt-0 ">
          <h1 className="text-lg md:text-xl text-center font-bold tracking-wider">
            SOCIAL
          </h1>
          <div className="flex justify-between gap-3">
            <div className="p-1 my-2 border rounded-sm cursor-pointer bg-gray-100 h-max min-w-max">
              <a
                href="https://www.linkedin.com/in/souvik-hazra-202321252/"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  height={20}
                  width={20}
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="p-1 my-2 border rounded-sm cursor-pointer bg-gray-100 h-max min-w-max">
              <a href="https://github.com/Mr-R-e-X" target="_blank">
                <Image src="/github.svg" height={20} width={20} alt="github" />
              </a>
            </div>
            <div className="p-1 my-2 border rounded-sm cursor-pointer bg-gray-100 h-max min-w-max">
              <a href="mailto:souvikhazra151@gmail.com" target="_blank">
                <Image src="/mail.svg" height={20} width={20} alt="mail" />
              </a>
            </div>
            <div className="p-1 my-2 border rounded-sm cursor-pointer bg-gray-100 h-max min-w-max">
              <a href="/SOUVIK_HAZRA.pdf" download>
                <Download height={20} width={20} className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto" />
      <div className="px-10 py-4 text-sm text-center">
        <p> &copy; All rights reserved 2024. Made with 💖 by Souvik Hazra </p>
      </div>
    </>
  );
};

export default Footer;
