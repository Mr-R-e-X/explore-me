import Image from "next/image";
import React from "react";

const FixedSocialMedia = () => {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] left-0 bg-white h-max p-2 rounded-sm shadow-lg shadow-black hidden md:block">
      <div className="p-2 my-2 border rounded-sm cursor-pointer bg-gray-100">
        <a
          href="https://www.linkedin.com/in/souvik-hazra-202321252/"
          target="_blank"
        >
          <Image src="/linkedin.svg" height={30} width={30} alt="linkedin" />
        </a>
      </div>
      <div className="p-2 my-2 border rounded-sm cursor-pointer bg-gray-100">
        <a href="https://github.com/Mr-R-e-X" target="_blank">
          <Image src="/github.svg" height={30} width={30} alt="github" />
        </a>
      </div>
      <div className="p-2 my-2 border rounded-sm cursor-pointer bg-gray-100">
        <a href="mailto:souvikhazra151@gmail.com" target="_blank">
          <Image src="/mail.svg" height={30} width={30} alt="mail" />
        </a>
      </div>
    </div>
  );
};

export default FixedSocialMedia;
