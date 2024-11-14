"use client";
import {
  GithubIcon,
  GlobeLockIcon,
  MonitorSmartphone,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Projects = () => {
  return (
    <div
      className="w-full lg:px-12 md:px-8 px-2 py-4 mb-6"
      id={"projectsSection"}
    >
      <div className="flex flex-col gap-2 my-8">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider text-[#3f3f56] text-center mb-1">
          PROJECTS
        </h1>
        <div className="h-[8px] w-[52px] mx-auto bg-[#4F4D69] rounded-xl"></div>
        <p className="text-center text-base font-semibold tracking-wider text-[#5c5c7e] mt-4 mb-2">
          Here are some of the projects I&apos;ve worked on recently.
        </p>
      </div>
      <div className="w-full px-10 ">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
        >
          <CarouselContent>
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 ">
                <Card>
                  <CardHeader>
                    <CardTitle className="tracking-wider text-lg text-center text-[#3f3f56] mb-3">
                      {project.title.toUpperCase()}
                    </CardTitle>
                    <CardDescription className="w-full flex flex-row flex-wrap gap-1 justify-center">
                      {project.tools.map((tech, idx) => {
                        return (
                          <div key={idx} className="h-max w-max">
                            <Badge className="bg-[#4F4D69]">{tech}</Badge>
                          </div>
                        );
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                      <iframe
                        src={project.url}
                        className="w-[100%] h-[100%] transform"
                        loading="lazy"
                      ></iframe>
                    </div>

                    <div className="h-24 overflow-y-scroll">
                      <p className="text-sm text-muted-foreground">
                        {project.desc}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="bottom-0">
                    <div className="w-[90%] mx-3">
                      <a href={project.url} target="_blank">
                        <Button className="w-full bg-[#4F4D69] flex items-center font-semibold">
                          <GlobeLockIcon />
                          Visit Page
                        </Button>
                      </a>
                    </div>
                    <div className="w-max]">
                      {project.github.length === 1 ? (
                        <a href={project.github[0]} target="_blank">
                          <GithubIcon />
                        </a>
                      ) : (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="py-2">
                            <GithubIcon />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#4F4D69] text-white py-3 rounded-md">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="mb-2 px-2 py-2">
                              <a href={project.github[0]}>
                                <MonitorSmartphone />
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-2">
                              <a href={project.github[1]}>
                                <Server />
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
