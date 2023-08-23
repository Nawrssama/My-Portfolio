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
  meta,
  starbucks,
  tesla,
  shopify,
  python,
  react,
  webd,
  fullstack,
  django,
  nextjs,
  carrent,
  jobit,
  tripguide,
  threejs,
  screen3,
  screen2,
  screen1,
  
} from "../assets"

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
    id: "tech",
    title: "tech",
  },
  {
    id: "projects",
    title: "projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Django",
    icon: django,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ASAC",
    icon: react,
    iconBg: "#383E56",
    date: "February 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with a cross-functional team of designers, developers, and stakeholders.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Developer",
    company_name: "ASAC",
    icon: python,
    iconBg: "#E6DEDD",
    date: "February 2023 - August 2023",
    points: [
      "Designing, developing, and maintaining Python applications, focusing on clean and efficient code.",
      "Implementing RESTful APIs using frameworks like Django to facilitate seamless communication between different components.",
      "Utilizing object-oriented programming principles to create modular and reusable code components.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ASAC",
    icon: webd,
    iconBg: "#383E56",
    date: "February 2023 - August 2023",
    points: [
      "Front-end Development: Led the front-end development efforts, utilizing HTML, CSS, and JavaScript to create visually appealing and user-friendly web interfaces.",
      "Responsive Design: Ensured websites were fully responsive and optimized for various devices, enhancing user experience and accessibility.",
      "Problem Solving: Demonstrated strong problem-solving skills when faced with complex technical challenges, finding efficient solutions to meet project goals.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ASAC",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "February 2023 - August 2023",
    points: [
      "End-to-End Web Solutions: Developed full-stack web applications, seamlessly handling both front-end and back-end development to deliver comprehensive solutions.",
      "Technology Stack: Utilized a modern technology stack, including languages like JavaScript (Node.js and React), to build highly functional and responsive web applications.",
      "Database Management: Designed and maintained databases, ensuring efficient data storage, retrieval, and management for applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "If you want a web developer who's not only skilled but also an incredible working companion, Nawrs is your go-to guy.",
    name: "Abdullah Abu Hamad",

    image: "https://avatars.githubusercontent.com/u/103138514?v=4",
  },
  {
    testimonial:
      "Working with Nawrs is like having a secret weapon in the world of web development, he's a friend who turns visions into exceptional websites.",
    name: "Amjad Alsayyed",

    image: "https://avatars.githubusercontent.com/u/87771699?v=4",
  },
  {
    testimonial:
      "Nawrs is not just a web developer; he's a great working friend who turns digital dreams into reality, making the impossible possible.",
    name: "Abdullah Shaghnoba",

    image: "https://avatars.githubusercontent.com/u/123549230?v=4",
  },
];

const projects = [
  {
    name: "Games Cube",
    description:
      "a platform that have information about games, made for gamers, build in JavaScript using node.js and react.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ABI",
        color: "pink-text-gradient",
      },
    ],
    image: screen1,
    source_code_link: "https://github.com/APIGameCube",
  },
  {
    name: "Coinsurfers Chronicles",
    description:
      "a game( similar to Mario ) made along with a great team, build in python using pygame library,",
    tags: [
      {
        name: "pygame",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
    ],
    image: screen2,
    source_code_link: "https://github.com/pythond10-group1-midproject/coinsurfers-chronicles",
  },
  {
    name: "Creativity Overflow",
    description:
      "A platform where artists can showcase their talent, collectors can discover and compete on an incredible artworks. build in Django and next.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: screen3,
    source_code_link: "https://github.com/orgs/Creativity-Overflow/repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };