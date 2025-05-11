'use client';
import React, { useEffect, useState } from 'react';
import { aboutMeParagraphs, aboutMesubtitle, skills } from '@/constants/constants';
import { Contact } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { handleScroll } from '@/hooks/handleInnerLink';
import { SyntheticEvent } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const About = () => {
  const handleInnerLinks = (e: SyntheticEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      handleScroll(element);
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 800, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  return (
    <section id="aboutSection" className="bg-[#F9FAFB] py-20 px-4 h-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2B2B45] mb-2">ABOUT ME</h2>
        <div className="w-16 h-1 bg-[#4F4D69] mx-auto rounded-full mb-4" />
        <p className="text-[#5c5c7e] max-w-2xl mx-auto text-lg font-medium">{aboutMesubtitle}</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8 md:p-12 mb-16 text-center">
        <h3 className="text-2xl font-semibold text-[#3f3f56] mb-6">GET TO KNOW ME</h3>
        <div className="space-y-4 text-[#5c5c7e] text-base leading-relaxed">
          {aboutMeParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Button
          onClick={(e) => handleInnerLinks(e, 'contactSection')}
          className="mt-8 bg-[#4F4D69] hover:bg-[#3f3f56] text-white px-6 py-3 text-sm font-semibold rounded-lg flex items-center gap-2 mx-auto transition-transform hover:scale-105"
        >
          <Contact size={18} />
          Contact Me
        </Button>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#3f3f56] mb-8">MY SKILLS</h3>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex py-2">
            {[...skills, ...skills].map((skill, idx) => (
              <div className="embla__slide shrink-0 min-w-[160px] px-2" key={idx}>
                <Card className="p-4 flex flex-col items-center gap-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <Image
                    src={skill.imgSrc}
                    alt={skill.title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <span className="text-sm text-[#4A4A65] font-medium text-center">
                    {skill.title}
                  </span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
