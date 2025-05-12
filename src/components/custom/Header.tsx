'use client';
import Image from 'next/image';
import React, { SyntheticEvent } from 'react';
import {
  HomeIcon,
  LaughIcon,
  BriefcaseBusiness,
  Contact,
  MenuIcon,
  Briefcase,
  Download,
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { handleScroll } from '@/hooks/handleInnerLink';
import { ModalActionEnum, useModal } from '@/contexts/modalContext';

const Header = () => {
  const { dispatch } = useModal();

  const handleInnerLinks = (e: SyntheticEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) handleScroll(element);
  };

  const navLinks = [
    { label: 'HOME', icon: <HomeIcon className="h-4 w-4" />, id: 'homeSection' },
    { label: 'ABOUT', icon: <LaughIcon className="h-4 w-4" />, id: 'aboutSection' },
    { label: 'EXPERIENCE', icon: <Briefcase className="h-4 w-4" />, id: 'experienceSection' },
    { label: 'PROJECTS', icon: <BriefcaseBusiness className="h-4 w-4" />, id: 'projectsSection' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md shadow-md px-4 lg:px-12 py-4 text-[#4A4A65] dark:text-white bg-opacity-70 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3 font-bold text-base cursor-pointer hover:text-violet-500">
        <Image
          src="/header_profile_img.png"
          alt="souvik_hazra"
          width={40}
          height={40}
          className="rounded-full border-2 border-violet-500"
        />
        <span className="tracking-widest">SOUVIK HAZRA</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.id}`}
            onClick={(e) => handleInnerLinks(e, link.id)}
            className="flex items-center gap-1 hover:text-violet-600 transition-colors"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
        <button
          onClick={() => dispatch({ type: ModalActionEnum.OPEN_CONTACT })}
          className="flex items-center gap-1 hover:text-violet-600 transition-colors"
        >
          <Contact className="h-4 w-4" />
          <span>CONTACT</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="p-2 border rounded-md">
              <MenuIcon />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-[#FEFEFE] dark:bg-[#1c1c24]">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-3 font-bold text-lg">
                  <Image
                    src="/header_profile_img.png"
                    alt="souvik_hazra"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-violet-500"
                  />
                  <span className="tracking-widest text-[#4A4A65] dark:text-white">
                    SOUVIK HAZRA
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  onClick={(e) => handleInnerLinks(e, link.id)}
                  className="flex items-center gap-2 text-sm font-medium text-[#4A4A65] dark:text-white px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-[#2a2a38] transition-all"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
              <button
                onClick={() => dispatch({ type: ModalActionEnum.OPEN_CONTACT })}
                className="flex items-center gap-2 text-sm font-medium text-[#4A4A65] dark:text-white px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-[#2a2a38] transition-all"
              >
                <Contact className="h-4 w-4" />
                <span>CONTACT</span>
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/souvik-hazra-202321252/"
                target="_blank"
                className="p-2 bg-gray-100 dark:bg-[#2a2a38] rounded border"
              >
                <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
              </a>
              <a
                href="https://github.com/Mr-R-e-X"
                target="_blank"
                className="p-2 bg-gray-100 dark:bg-[#2a2a38] rounded border"
              >
                <Image src="/github.svg" width={24} height={24} alt="github" />
              </a>
              <a
                href="mailto:souvikhazra151@gmail.com"
                target="_blank"
                className="p-2 bg-gray-100 dark:bg-[#2a2a38] rounded border"
              >
                <Image src="/mail.svg" width={24} height={24} alt="mail" />
              </a>
              <a
                href="/SOUVIK_HAZRA.pdf"
                download
                className="p-2 bg-gray-100 dark:bg-[#2a2a38] rounded border"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
