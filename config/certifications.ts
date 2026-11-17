export type Certification = {
  category: "education" | "certification" | "course";
  name: string;
  issuer: string;
  issued: string;
  url?: string;
  description?: string;
  result?: string;
  tags?: string[];
};

export const certifications: Certification[] = [
  {
    category: "education",
    name: "BSc in Computer Science and Engineering",
    issuer: "Bangladesh University of Engineering and Technology (BUET)",
    issued: "July 2014",
  },
  {
    category: "certification",
    name: "telc Deutsch C1 Hochschule",
    issuer: "telc",
    issued: "15 May 2026",
    description: "German language proficiency at CEFR level C1.",
  },
  {
    category: "course",
    name: "Learn and Understand NodeJS",
    tags: ["JavaScript", "Node.js", "Backend"],
    url: "https://www.udemy.com/course/understand-nodejs/",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    category: "course",
    name: "Node with React: Fullstack Web Development",
    tags: ["JavaScript", "Node.js", "React", "Fullstack"],
    url: "https://www.udemy.com/course/node-with-react-fullstack-web-development/",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    category: "course",
    name: "Introduction to Psychology",
    tags: ["Psychology", "HumanBehavior", "SoftSkills", "Leadership"],
    url: "https://www.coursera.org/learn/introduction-psychology",
    issuer: "Coursera",
    issued: "Completed",
    description: "An introduction to the foundations of psychology and human behavior.",
  },
];
