import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { edvSkills, skillExp } from "@/constants/constants";
import Image from "next/image";
import { Badge } from "../ui/badge";

const Experience = () => {
  return (
    <div className="w-full lg:px-12 md:px-8 px-2 py-4" id={"experienceSection"}>
      <div className="flex flex-col gap-2 my-8">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl tracking-wider text-[#3f3f56] text-center mb-1">
          EXPERIENCE
        </h1>
        <div className="h-[8px] w-[52px] mx-auto bg-[#4F4D69] rounded-xl"></div>
      </div>
      <div className="flex flex-col md:gap-5 gap-2 justify-center items-center mt-6">
        <div className="lg:w-2/3 w-full flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <h2 className="font-bold text-xl tracking-wider text-[#3f3f56] mb-4 text-center lg:text-start flex items-center">
              Softawre Development Engineer{" "}
              <Image
                src={"/live.png"}
                alt="Coding Ninjas"
                height={10}
                width={10}
                className="ml-2"
              ></Image>{" "}
            </h2>
            <div className="text-sm tracking-wider text-[#5c5c7e] mb-2 flex felx-row justify-center lg:justify-start items-center gap-2 font-semibold">
              <Image
                src={"/edviron_logo.png"}
                alt="Coding Ninjas"
                height={300}
                width={80}
              ></Image>{" "}
            </div>
            <p className="text-sm tracking-wider text-[#5c5c7e] text-center lg:text-start">
              <span className="text-gray-600">2025-JAN to Present</span>
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-1 mt-2 lg:mt-0 lg:w-1/3 h-max">
            {edvSkills.map((skill, idx) => (
              <div key={idx} className="h-max">
                <Badge className="bg-[#4F4D69]">{skill.title}</Badge>
              </div>
            ))}
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="lg:w-2/3 w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-semibold">
              RESPONSIBILITIES
            </AccordionTrigger>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Develop and maintain scalable web applications using NestJS and
              React, ensuring high performance and responsiveness.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Design and optimize GraphQL APIs, improving data fetching
              efficiency and reducing client-server communication overhead.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Work with microservices architecture, ensuring modularity,
              scalability, and efficient inter-service communication
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Write unit and integration tests using Jest, improving code
              quality and reliability
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Manage MongoDB databases, designing efficient schemas and
              optimizing queries for performance.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Integrate payment gateways like Easebuzz, Razorpay, and Cashfree,
              ensuring secure and seamless transactions.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Develop and maintain webhooks, enabling real-time data
              synchronization across services
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Collaborate with cross-functional teams in an Agile environment,
              actively participating in code reviews and sprint planning.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col md:gap-5 gap-2 justify-center items-center mt-6">
        <div className="lg:w-2/3 w-full flex flex-col lg:flex-row">
          <div className=" lg:w-2/3">
            <h2 className="font-bold text-xl tracking-wider text-[#3f3f56] mb-4 text-center lg:text-start">
              Teaching Assistant for Full Stack Development
            </h2>
            <div className="text-sm tracking-wider text-[#5c5c7e] mb-2 flex felx-row justify-center lg:justify-start items-center gap-2 font-semibold">
              <Image
                src={"/cn_exp.svg"}
                alt="Coding Ninjas"
                height={300}
                width={30}
              ></Image>{" "}
              SUNRISE MENTORS PRIVATE LIMITED
            </div>
            <p className="text-sm tracking-wider text-[#5c5c7e] text-center lg:text-start">
              <span className="text-gray-600">2024-JAN to Present</span>
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-1 mt-2 lg:mt-0 lg:w-1/3 h-max">
            {skillExp.map((skill, idx) => (
              <div key={idx} className="h-max">
                <Badge className="bg-[#4F4D69]">{skill.title}</Badge>
              </div>
            ))}
          </div>
        </div>
        <Accordion type="single" collapsible className="lg:w-2/3 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-semibold">
              RESPONSIBILITIES
            </AccordionTrigger> 
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Conducted one-on-one doubt-clearing sessions, providing
              personalized support to help students understand complex concepts.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Assisted in debugging and troubleshooting code, enhancing
              students&apos; problem-solving skills and knowledge of best
              practices.
            </AccordionContent>
            <AccordionContent className="text-base text-wrap font-semibold text-[#5c5c7e] pl-2">
              Guided students with assignments and projects, offering mentorship
              to support their learning journey and project completion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
