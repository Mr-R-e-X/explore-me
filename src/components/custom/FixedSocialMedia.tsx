'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, Share2, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/souvik-hazra-202321252/',
    icon: <Linkedin className="w-5 h-5 text-white" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Mr-R-e-X',
    icon: <Github className="w-5 h-5 text-white" />,
    label: 'GitHub',
  },
  {
    href: 'mailto:souvikhazra151@gmail.com',
    icon: <Mail className="w-5 h-5 text-white" />,
    label: 'Mail',
  },
  {
    href: '/SOUVIK_HAZRA.pdf',
    icon: <Download className="w-5 h-5 text-white" />,
    label: 'Resume',
    isDownload: true,
  },
];

const FixedSocialMedia = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="fixed right-0 bottom-5 z-50">
      <div className="relative w-16 h-16">
        {socialLinks.map((link, index) => {
          const angle = (index / (socialLinks.length - 1)) * (Math.PI / 2) + Math.PI;
          const radius = 90;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.isDownload}
              className={`absolute w-10 h-10 rounded-full bg-[#4F4D69] hover:bg-[#3f3f56]  border border-white flex items-center justify-center shadow-md transition-all duration-300 ease-out
                ${open ? 'opacity-100 scale-100 hover:scale-105' : 'opacity-0 scale-0'}
              `}
              style={{
                top: `calc(50% + ${y}px - 20px)`,
                left: `calc(50% + ${x}px - 20px)`,
              }}
              title={link.label}
            >
              {link.icon}
            </a>
          );
        })}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-10 rounded-full bg-[#4F4D69] hover:bg-[#3f3f56] hover:scale-105 text-white flex items-center justify-center shadow-lg transition-transform duration-300 active:scale-90"
          title="Open Social Menu"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FixedSocialMedia;
