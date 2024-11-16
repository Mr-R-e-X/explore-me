import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FixedSocialMedia = () => {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] left-0 bg-white h-max p-2 rounded-sm shadow-lg shadow-black hidden lg:block">
      <TooltipProvider>
        <Tooltip>
          <div>
            <TooltipTrigger>
              <div className="p-2 my-1 border rounded-sm cursor-pointer bg-gray-100">
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
          </div>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <div>
            <TooltipTrigger>
              <div className="p-2 my-1 border rounded-sm cursor-pointer bg-gray-100">
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
          </div>
          <TooltipContent>
            <p>github</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <div>
            <TooltipTrigger>
              <div className="p-2 my-1 border rounded-sm cursor-pointer bg-gray-100">
                <a href="mailto:souvikhazra151@gmail.com" target="_blank">
                  <Image src="/mail.svg" height={30} width={30} alt="mail" />
                </a>
              </div>
            </TooltipTrigger>
          </div>
          <TooltipContent>
            <p>mail</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <div>
            <TooltipTrigger>
              <div className="p-2 my-1 border rounded-sm cursor-pointer bg-gray-100">
                <a href="/SOUVIK_HAZRA.pdf" download>
                  <Download height={30} width={30} />
                </a>
              </div>
            </TooltipTrigger>
          </div>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FixedSocialMedia;
