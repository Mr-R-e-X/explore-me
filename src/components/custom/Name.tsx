"use client";
import { catchLine, myName } from "@/constants/constants";
import { typeWriter } from "@/hooks/typeWriter";
import { BriefcaseBusiness } from "lucide-react";
import { SyntheticEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { handleScroll } from "@/hooks/handleInnerLink";

const Name = () => {
  const [mainTitle, setMainTitle] = useState<string>("");
  const [subtitle, setSubTitle] = useState<string>("");

  const handleInnerLinks = (e: SyntheticEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      handleScroll(element);
    }
  };

  useEffect(() => {
    typeWriter({ delay: 110, text: myName, setValue: setMainTitle });
    typeWriter({ delay: 30, text: catchLine, setValue: setSubTitle });
  }, []);

  return (
    <div
      className="flex flex-col h-screen items-center justify-center w-full"
      id={"homeSection"}
    >
      <div className="lg:text-6xl md:text-5xl text-4xl font-bold tracking-wider text-[#3f3f56] my-8 mx-4">
        <h1 className="text-center">{mainTitle}</h1>
      </div>
      <div className="md:text-lg text-base font-semibold tracking-wider text-[#5c5c7e] w-2/3 my-8 mx-4">
        <p className="text-center">{subtitle}</p>
      </div>

      <Button
        variant="outline"
        onClick={(e) => handleInnerLinks(e, "projectsSection")}
        className="text-lg bg-[#4F4D69] text-white relative  font-bold w-max top-1 h-max px-8 py-3 tracking-widest shadow-md hover:shadow-lg hover:scale-105 hover:top-0 transition-all duration-100 ease-linear text-center"
      >
        <BriefcaseBusiness /> <span>PROJECTS</span>
      </Button>
    </div>
  );
};

export default Name;
