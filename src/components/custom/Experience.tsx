import Image from 'next/image';
import { edvSkills, skillExp, prodiosSkills } from '@/constants/constants';

const experienceData = [
  {
    title: 'Software Development Engineer',
    company: 'Prodios Labs',
    logo: '/prodios_logo.svg',
    tools: prodiosSkills,
    date: '2025-MAY',
  },
  {
    title: 'Software Development Engineer (Intern)',
    company: 'Edviron',
    logo: '/edviron_logo.png',
    tools: edvSkills,
    date: '2025-JAN to 2025-APR',
  },
  {
    title: 'Teaching Assistant for Full Stack Development',
    company: 'Sunrise Mentors Private Limited',
    logo: '/cn_exp.svg',
    tools: skillExp,
    date: '2024-JAN to 2024-DEC',
  },
];

const Experience = () => {
  return (
    <div
      className="relative w-full h-full flex justify-center px-4 py-12 bg-[#f9f9fc]"
      id="experienceSection"
    >
      <div className="w-full max-w-3xl">
        <h1 className="font-bold text-3xl tracking-wide text-[#3f3f56] text-center mb-10">
          EXPERIENCE
        </h1>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#4F4D69]/30 rounded-md z-0" />

          <div className="flex flex-col gap-12 relative z-2">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 shadow-md rounded-xl p-6 w-full mx-auto flex flex-col gap-4"
              >
                {!exp.date.includes('to') && (
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse shadow-md" />
                )}
                <div className="flex items-center gap-4">
                  <Image
                    src={exp.logo}
                    alt={exp.title}
                    height={40}
                    width={40}
                    className="object-contain rounded-md bg-white p-1"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#3f3f56]">{exp.title}</h2>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-around gap-4 pt-2 border-t border-gray-200 mt-2">
                  {exp.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Image
                        src={tool.imgSrc}
                        alt={tool.title}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm text-gray-700">{tool.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
