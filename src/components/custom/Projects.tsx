'use client';
import { GithubIcon, GlobeLockIcon, MonitorSmartphone, Server } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '../ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const Projects = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  return (
    <div className="w-full lg:px-12 md:px-8 px-2 py-8 mb-6" id="projectsSection">
      <div className="flex flex-col gap-4 my-8">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider text-[#3f3f56] text-center mb-1">
          MY PROJECTS
        </h1>
        <div className="h-[8px] w-[52px] mx-auto bg-[#4F4D69] rounded-xl"></div>
        <p className="text-center text-lg font-medium tracking-wider text-[#5c5c7e] mt-4 mb-6">
          Take a look at some of the exciting projects I&apos;ve built recently.
        </p>
      </div>
      <div className="w-full px-6 lg:px-12">
        <Carousel ref={emblaRef} opts={{ loop: true }}>
          <CarouselContent>
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 xl:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <CardHeader className="p-4 bg-[#4F4D69] text-white rounded-t-lg">
                    <CardTitle className="tracking-wider text-lg text-center font-semibold mb-3">
                      {project.title.toUpperCase()}
                    </CardTitle>
                    <CardDescription className="flex gap-2 justify-center">
                      {project.tools.map((tech, idx) => (
                        <Badge key={idx} className="bg-[#3f3f56] text-white">
                          {tech}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 flex flex-col gap-4">
                    <div className="flex justify-center items-center overflow-hidden rounded-lg">
                      <iframe
                        src={project.url}
                        className="w-full h-60 transform hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      ></iframe>
                    </div>

                    <div className="h-24 overflow-y-scroll">
                      <p className="text-sm text-[#4A4A65]">{project.desc}</p>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between gap-4 p-4 bg-[#f8f8f8] rounded-b-lg">
                    <div className="flex-1">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#4F4D69] text-white font-semibold flex items-center justify-center hover:bg-[#3f3f56] transition-colors duration-300">
                          <GlobeLockIcon />
                          <span className="ml-2">Visit Page</span>
                        </Button>
                      </a>
                    </div>
                    <div className="flex items-center">
                      {project.github.length === 1 ? (
                        <a
                          href={project.github[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4F4D69] hover:text-[#3f3f56] transition-colors duration-300"
                        >
                          <GithubIcon size={20} />
                        </a>
                      ) : (
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <GithubIcon size={20} className="text-[#4F4D69] hover:text-[#3f3f56]" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#4F4D69] text-white py-3 rounded-md">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <a href={project.github[0]} className="flex items-center gap-2">
                                <MonitorSmartphone size={18} />
                                Mobile Repo
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <a href={project.github[1]} className="flex items-center gap-2">
                                <Server size={18} />
                                Backend Repo
                              </a>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="flex justify-between mt-6">
            <CarouselPrevious className="bg-[#4F4D69] text-white p-3 rounded-full hover:bg-[#3f3f56] transition-colors duration-300">
              Prev
            </CarouselPrevious>
            <CarouselNext className="bg-[#4F4D69] text-white p-3 rounded-full hover:bg-[#3f3f56] transition-colors duration-300">
              Next
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
