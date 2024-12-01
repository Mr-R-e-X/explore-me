export const myName = "HEY, I'M SOUVIK HAZRA.";
export const catchLine = `From server to client-side, I create comprehensive web solutions that fuel the product’s success. `;
export const aboutMesubtitle = `I'm a full-stack developer dedicated to creating cohesive, end-to-end experiences—from server to client.`;
export const aboutMeParagraphs = [
  "I'm a Full-Stack Web Developer with expertise in building and managing both the client and server sides of websites and web applications that support product success.",
  "Check out my Projects section to see my work, and you can explore my code on GitHub. Feel free to connect with me on LinkedIn.",
  "I'm actively open to job opportunities where I can bring value, expand my skills, and grow professionally.",
];
export const skills: Array<{ title: string; imgSrc: string }> = [
  {
    title: "HTML",
    imgSrc: "/html.svg",
  },
  {
    title: "CSS",
    imgSrc: "/css.svg",
  },
  {
    title: "JavaScript",
    imgSrc: "/js.svg",
  },
  {
    title: "TypeScript",
    imgSrc: "/typescript.svg",
  },
  {
    title: "React",
    imgSrc: "/reactjs.svg",
  },
  {
    title: "NextJs",
    imgSrc: "/nextjs.svg",
  },
  {
    title: "Redux",
    imgSrc: "/redux.svg",
  },
  {
    title: "NodeJs",
    imgSrc: "/node-js.svg",
  },
  {
    title: "MongoDB",
    imgSrc: "/mongodb.svg",
  },
  {
    title: "PostgreSQL",
    imgSrc: "/postgresql.svg",
  },
  {
    title: "Socket.io",
    imgSrc: "/socket-io.svg",
  },
  {
    title: "webRTC",
    imgSrc: "/webrtc.svg",
  },
];

export const skillExp: Array<{ title: string; imgSrc: string }> = [
  {
    title: "HTML",
    imgSrc: "/html.svg",
  },
  {
    title: "CSS",
    imgSrc: "/css.svg",
  },
  {
    title: "JavaScript",
    imgSrc: "/js.svg",
  },
  {
    title: "NodeJs",
    imgSrc: "/node-js.svg",
  },
  {
    title: "MongoDB",
    imgSrc: "/mongodb.svg",
  },
  {
    title: "Socket.io",
    imgSrc: "/socket-io.svg",
  },
];

export const projects: Array<{
  title: string;
  desc: string;
  imgSrc: string;
  url: string;
  github: Array<string>;
  tools: Array<string>;
}> = [
  {
    title: "Flow Maker",
    desc: "The Flow Maker app, built using the MERN stack, enables users to easily create and manage email sequences with automated emails and scheduled tasks. It allows for bulk lead uploads via CSV files, streamlining the process of managing contacts. Additionally, users can create custom email templates to personalize their outreach, making it an efficient tool for managing workflows and communication.",
    imgSrc: "",
    url: "https://flow-maker-frontend-dxr7.vercel.app/",
    github: [
      "https://github.com/Mr-R-e-X/Flow_Maker_Frontend",
      "https://github.com/Mr-R-e-X/Flow_Maker_Backend",
    ],
    tools: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Mystry Message",
    desc: "Mystry Message is an anonymous feedback and Q&A platform where users can sign up, generate a unique feedback link, and share it with others. Anyone with the link can send anonymous feedback or ask questions, ensuring privacy and open communication. The feedback page integrates OpenAI's ChatGPT 4.0, providing smart message suggestions to assist users in crafting responses. This feature enriches the feedback experience, helping users reply thoughtfully and quickly.",
    imgSrc: "",
    url: "https://mystry-message-next.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/Mystry_Message_NextJs"],
    tools: ["Next.js", "TypeScript", "React", "MongoDB", "OpenAI ChatGPT 4.0"],
  },
  {
    title: "Chatterly",
    desc: "A feature-rich chat application that lets users connect through direct messages, create group chats, and enjoy high-quality video and audio calls. Chatterly supports friend requests, group creation, and real-time messaging with seamless video and audio integration.",
    imgSrc: "",
    url: "https://chat-app-client-dusky.vercel.app/",
    github: [
      "https://github.com/Mr-R-e-X/ChatApp-Client",
      "https://github.com/Mr-R-e-X/ChatApp-Server",
    ],
    tools: [
      "MongoDB",
      "ReactJS",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "WebRTC",
    ],
  },
  {
    title: "Easily Api",
    desc: "A powerful job search REST API where users can explore job listings, apply to positions, and save jobs for future reference. Companies have a streamlined interface to post job openings, manage applications, and view detailed applicant information.",
    imgSrc: "",
    url: "https://easily-1-8sey.onrender.com/api-docs/",
    github: ["https://github.com/Mr-R-e-X/Easily"],
    tools: ["Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Quiz App",
    desc: "Dive into a fun and educational quiz experience with Easily! Choose from 25+ topics—like General Knowledge, Music, Science, and more—or try a random quiz. With a 30-second timer for each question, an interactive interface, and real-time scoring, you can test your knowledge and compete with friends. Review your score and answers, then play again to keep learning and challenging yourself. Powered by questions from the Open Trivia DB community!",
    imgSrc: "",
    url: "https://quiz-app-seven-gules-27.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/quiz-app"],
    tools: ["HTML", "TailwindCss", "Javascript"],
  },
  {
    title: "My Shop",
    desc: "Welcome to the Shopping Cart Dummy App—a fully responsive e-commerce platform featuring product browsing, detailed views, and seamless cart management. Users can sign up, search and filter products, view profiles, track orders, and experience demo payments via Razorpay.",
    imgSrc: "",
    url: "https://my-shop-zeta-one.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/My_Shop"],
    tools: ["HTML", "TailwindCss", "Javascript", "Razorpay Api"],
  },
  {
    title: "To-Do List",
    desc: "A dynamic to-do list application where users can create, update, and delete tasks seamlessly. The app utilizes local storage to save tasks, providing a persistent and interactive experience for users.",
    imgSrc: "",
    url: "https://to-do-vanila-js.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/ToDo-VanilaJs"],
    tools: ["HTML", "TailwindCss", "Javascript"],
  },
  {
    title: "Meal App",
    desc: "A meal exploration app powered by TheMealDB API, where users can search for recipes, browse meals by country, ingredients, or alphabet. Discover new dishes and explore a wide variety of cuisines with an easy-to-use interface.",
    imgSrc: "",
    url: "https://front-end-test-meal-app.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/FrontEndTest_MealApp"],
    tools: ["HTML", "TailwindCss", "Javascript"],
  },
  {
    title: "NASA Picture of the Day",
    desc: "A NASA Picture of the Day app that showcases stunning daily space images. Users can search for images from previous dates and view their search history. Explore the cosmos with beautiful visuals and keep track of your favorite discoveries.",
    imgSrc: "",
    url: "https://nasa-apod-ruddy.vercel.app/",
    github: ["https://github.com/Mr-R-e-X/NASA_APOD"],
    tools: ["HTML", "TailwindCss", "Javascript"],
  },
];
