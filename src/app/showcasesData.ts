export type ShowcaseData = {
  id: string;
  title: string;
  description: string;
  content: string;
  images: string[];
  technologies: string[];
  liveURL?: string;
  githubURL?: string;
  projectRole: string;
  timeline: TimelineNode;
};

export type TimelineNode = {
  label: string;
  time: number;
  span: { end: number | "Present"; label: string };
  company: string;
};

export const showcases: ShowcaseData[] = [
  {
    id: "scouterna",
    title: "Scouterna",
    description: "The Scouts are a democratic children's and youth organization based on the scout method. The Scouts are non-religious and welcome everyone who can stand behind their core values.",
    content: "Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund.",
    images: [
      "/images/projects/Scouterna.webp",
      "/images/projects/Scouterna-inside.webp",
      "/images/projects/Scouterna-inside-2.webp",
      "/images/projects/Scouterna-inside-3.webp",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Javascript",
      "Styled Components",
      "HTML",
      "CSS",
      "Ant Design",
      "Mongoose",
      "MongoDB",
      "SWR",
      "Redux",
      "Azure",
      "SAML/OpenID",
      "Github Projects",
      "Github Actions",
      "Jest",
      "React Testing Library",
      "Docker",
      "Rest API",
      "GraphQL",
    ],
    liveURL: "https://q.scoutnet.se/",
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Jan 2023 - Present",
      time: new Date("2023-01-01").getTime(),
      span: { end: "Present", label: "Jan 2023 - Present" },
      company: "Scouterna"
    }
  },
  {
    id: "mimbly",
    title: "Mimbly",
    description: "Mimbly is a cleantech company from Gothenburg. Starting in 2023, Mimbly designs and launches its laundry innovations in Gothenburg, Sweden. Their achievements over the years are what propels them from startup to scaleup.",
    content: "Mimbly is a cleantech company from Gothenburg. Starting in 2023, Mimbly designs and launches its laundry innovations in Gothenburg, Sweden. Their achievements over the years are what propels them from startup to scaleup.",
    images: [
      "/images/projects/Mimbly.webp",
      "/images/projects/Mimbly-inside.webp",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Javascript",
      "CSS Modules",
      "HTML",
      "CSS",
      "Azure DevOps",
      "SQL Server",
      "Redux",
      "Azure AD",
      "Github Actions",
      "Docker",
      "Rest API",
    ],
    projectRole: "Frontend Developer",
    timeline: {
      label: "Sep 2022 - Jan 2023",
      time: new Date("2022-09-01").getTime(),
      span: { end: new Date("2023-01-01").getTime(), label: "Sep 2022 - Jan 2023" },
      company: "Mimbly"
    }
  },
  {
    id: "frontedgeit",
    title: "FrontedgeIT.se",
    description: "FrontedgeIT is an IT consulting company that offers consulting services in IT and system development. They have extensive experience in delivering IT solutions to both large and small companies.",
    content: "FrontedgeIT is an IT consulting company that offers consulting services in IT and system development. They have extensive experience in delivering IT solutions to both large and small companies.",
    images: [
      "/images/projects/frontedgeit.webp",
      "/images/projects/FEIT-inside.webp",
      "/images/projects/FEIT-inside-2.webp",
      "/images/projects/FEIT-inside-3.webp",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Javascript",
      "Styled Components",
      "HTML",
      "CSS",
      "Directus (Headless CMS)",
      "Azure",
      "Github Actions",
      "Docker",
      "Rest API",
    ],
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Mar 2023 - Jun 2023",
      time: new Date("2023-03-01").getTime(),
      span: { end: new Date("2023-06-01").getTime(), label: "Mar 2023 - Jun 2023" },
      company: "FrontedgeIT"
    }
  },
  {
    id: "iamagame",
    title: "I am a game",
    description: "I am a game is a game that I created as a Degree Project and to learn Svelte, C#.net and SignalR.",
    content: "I am a game is a game that I created as a Degree Project and to learn Svelte, C#.net and SignalR.",
    images: ["/images/projects/iamagame.webp"],
    technologies: [
      "Svelte",
      "TypeScript",
      "C#.net",
      "SignalR",
      "Javascript",
      "HTML",
      "CSS",
      "Fly.io hosting",
      "Github Actions",
    ],
    githubURL: "https://github.com/Hargaaya/IAmAGame-Frontend",
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Jan 2021 - Jun 2021",
      time: new Date("2021-01-01").getTime(),
      span: { end: new Date("2021-06-01").getTime(), label: "Jan 2021 - Jun 2021" },
      company: "I am a game"
    }
  },
  {
    id: "foodlist",
    title: "Foodlist",
    description: "Foodlist is a web application that helps me keep track of my favorite recipes. I can add recipes, edit them and delete them. I can also change the amount of portions and get an updated list of ingredient amounts.",
    content: "Foodlist is a web application that helps me keep track of my favorite recipes. I can add recipes, edit them and delete them. I can also change the amount of portions and get an updated list of ingredient amounts.",
    images: ["/images/projects/foodlist.webp"],
    technologies: [
      "Vue",
      "TypeScript",
      "Firebase",
      "Javascript",
      "HTML",
      "CSS",
      "Vite",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Firebase Hosting",
      "Vuex",
    ],
    liveURL: "https://foodlist.jacobklaren.com/#/",
    githubURL: "https://github.com/Kybbe/foodlist",
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Nov 2021 - Mar 2022",
      time: new Date("2021-11-01").getTime(),
      span: { end: new Date("2022-03-01").getTime(), label: "Nov 2021 - Mar 2022" },
      company: "Foodlist"
    }
  },
  {
    id: "scruit",
    title: "Scruit",
    description: "Scruit is a Kanban board similar to Github Projects. Scruit is my first application that uses drag and drop.",
    content: "Scruit is a Kanban board similar to Github Projects. Scruit is my first application that uses drag and drop.",
    images: ["/images/projects/Scruit.webp"],
    technologies: [
      "React",
      "TypeScript",
      "React DnD",
      "Javascript",
      "HTML",
      "CSS",
      "Firebase",
      "React Color",
      "React Router",
    ],
    liveURL: "https://scruit-2.firebaseapp.com/",
    githubURL: "https://github.com/Kybbe/scruit",
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Jul 2022 - Apr 2022",
      time: new Date("2022-07-01").getTime(),
      span: { end: new Date("2022-04-01").getTime(), label: "Jul 2022 - Apr 2022" },
      company: "Scruit"
    }
  },
  {
    id: "todo",
    title: "Todo",
    description: "Todo is a todo application that allows multiple lists, saving everything locally.",
    content: "Todo is a todo application that allows multiple lists, saving everything locally.",
    images: ["/images/projects/todo.webp"],
    technologies: ["Vanilla JS", "Javascript", "HTML", "CSS"],
    liveURL: "http://todo.jacobklaren.com/",
    githubURL: "https://github.com/Kybbe/To-do",
    projectRole: "Frontend Developer",
    timeline: {
      label: "Aug 2021",
      time: new Date("2021-08-01").getTime(),
      span: { end: new Date("2021-08-01").getTime(), label: "Aug 2021" },
      company: "Todo"
    }
  },
  {
    id: "feitdashboard",
    title: "Frontedge dashboard",
    description: "Frontedge dashboard is a small project for a spare screen at the Frontedge IT office. The dashboard shows the weather, the time, the date and departures from the nearest bus stop in realtime.",
    content: "Frontedge dashboard is a small project for a spare screen at the Frontedge IT office. The dashboard shows the weather, the time, the date and departures from the nearest bus stop in realtime.",
    images: ["/images/projects/FEITDashboard.webp"],
    technologies: [
      "React",
      "TypeScript",
      "Javascript",
      "REST API",
      "HTML",
      "CSS",
    ],
    projectRole: "Fullstack Developer",
    timeline: {
      label: "Mar 2022",
      time: new Date("2022-03-01").getTime(),
      span: { end: new Date("2022-03-01").getTime(), label: "Mar 2022" },
      company: "Frontedge dashboard"
    }
  },
];
