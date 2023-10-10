import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ingenious,
  meta,
  preplabs,
  starbucks,
  ssoc,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Social Summer of Code",
    icon: ssoc,
    iconBg: "#383E56",
    date: "August 2022 - September 2022",
    points: [
      "Developing and maintaining open source applications using HTML/CSS/JS and other related technologies.",
      "Collaborating with designers, project managers, maintainers and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to peer developers.",
    ],
  },
  {
    title: "AWS Training",
    company_name: "Ingenious-Tech",
    icon: ingenious,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2022",
    points: [
      "Configuring IAM user roles for Windows/Linux instances and assigning policies.",
      "Activating and deactivating MFA on AWS root account to manage access secret key for root user.",
      "AWS CLI configuration on Windows 10, Redhat, Linux Machine.",
      "Introduction to S3 & mounting on Windows, Linux Machine to host static websites on S3 Bucket.",
      "OpenVPN setup,AWS VPC Endpoint for Private access to S3 from Private Instance.",
      "Elastic Load Balancer Concept , view ELB logs, AWS Auto Scaling Basic Concept.",
      "Migrating on premises VM to Amazon AWS Cloud Database & on prem to cloud / cloud to cloud.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Preplabs",
    icon: preplabs,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Collaborating in a team including designers & other developers to build a better application.",
      "Implementing Reactjs for a hastle free & better responsive design to ensure cross-browser functionality of end user.",
      "Using CRUD operations for the user operations.",
      "Connecting backend using technologies like NodeJS,MongoDB for easy migration of user data within client and server.",
      "Developing a static project using HTML/CSS/JS and another using MERN stack.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "XYZ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: ["To be continued..."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
