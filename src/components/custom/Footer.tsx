import { aboutMesubtitle } from '@/constants/constants';
import { Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold tracking-wide mb-2 text-center md:text-left">
            SOUVIK HAZRA
          </h2>
          <p className="text-gray-700 font-medium text-center md:text-left">{aboutMesubtitle}</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-bold tracking-wide mb-2">SOCIAL</h2>
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/in/souvik-hazra-202321252/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 border rounded-md p-2 hover:bg-gray-200 transition"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
            </a>
            <a
              href="https://github.com/Mr-R-e-X"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 border rounded-md p-2 hover:bg-gray-200 transition"
              aria-label="GitHub"
            >
              <Image src="/github.svg" alt="github" width={20} height={20} />
            </a>
            <a
              href="mailto:souvikhazra151@gmail.com"
              className="bg-gray-100 border rounded-md p-2 hover:bg-gray-200 transition"
              aria-label="Email"
            >
              <Image src="/mail.svg" alt="mail" width={20} height={20} />
            </a>
            <a
              href="/SOUVIK_HAZRA.pdf"
              download
              className="bg-gray-100 border rounded-md p-2 hover:bg-gray-200 transition"
              aria-label="Download Resume"
            >
              <Download height={20} width={20} className="text-black" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <div className="text-center text-sm text-gray-600 pb-6">
        &copy; {new Date().getFullYear()} All rights reserved. Made with 💖 by Souvik Hazra.
      </div>
    </footer>
  );
};

export default Footer;
