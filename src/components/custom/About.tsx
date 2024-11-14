import {
  aboutMeParagraphs,
  aboutMesubtitle,
  skills,
} from "@/constants/constants";
import { Contact } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="w-full lg:px-12 md:px-8 px-2 py-4" id={"aboutSection"}>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider text-[#3f3f56] text-center mt-8 lg:mt-16 mb-1">
          ABOUT ME
        </h1>
        <div className="h-[8px] w-[52px] mx-auto bg-[#4F4D69] rounded-xl"></div>
        <p className="text-center text-base font-semibold tracking-wider text-[#5c5c7e] my-4">
          {aboutMesubtitle}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 gap-2">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-xl lg:text-2xl  tracking-wider text-[#3f3f56] my-4">
            GET TO KNOW ME
          </h1>
          <div className="text-base font-normal tracking-wider text-[#5c5c7e] px-4 leading-7">
            {aboutMeParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
          <Button
            variant="outline"
            className="text-lg my-5 ml-3 bg-[#4F4D69] text-white relative font-bold w-max top-1 h-max px-8 py-3 tracking-widest shadow-md hover:shadow-lg hover:scale-105 hover:top-0 transition-all duration-100 ease-linear"
          >
            <Contact /> <span>Contact</span>
          </Button>
        </div>
        <div className=" w-full lg:w-1/2">
          <h1 className="font-bold text-xl lg:text-xl tracking-wider text-[#3f3f56] my-4">
            MY SKILLS
          </h1>
          <div className="flex flex-row flex-wrap gap-3 justify-start items-center px-4">
            {skills.map((skill, idx) => (
              <Button variant={"outline"} key={idx} className="w-max px-3 py-6">
                <Image
                  src={`${skill.imgSrc}`}
                  height={30}
                  width={30}
                  alt={`${skill.title}`}
                />{" "}
                <span className="font-semibold text-sm text-[#4A4A65]">
                  {skill.title}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
