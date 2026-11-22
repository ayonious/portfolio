export type Certification = {
  category: "education" | "certification" | "award" | "course";
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
    name: "Fundamentals of Agents",
    issuer: "Hugging Face",
    issued: "22 November 2026",
    url: "https://huggingface.co/learn/agents-course",
    description: "Completed Unit 1: Foundations of Agents in the Hugging Face Agents Course.",
    tags: ["AI", "Agents", "LLM"],
  },
  {
    category: "award",
    name: "ACM-ICPC Asia Regional Dhaka Site 2011",
    issuer: "ACM International Collegiate Programming Contest",
    issued: "Awarded",
    result: "3rd Place",
    tags: ["CompetitiveProgramming", "Algorithms", "ProblemSolving", "Teamwork"],
  },
  {
    category: "award",
    name: "ACM-ICPC Asia Regional Dhaka Site 2010",
    issuer: "ACM International Collegiate Programming Contest",
    issued: "Awarded",
    result: "7th Place",
    tags: ["CompetitiveProgramming", "Algorithms", "ProblemSolving", "Teamwork"],
  },
  {
    category: "award",
    name: "ACM-ICPC Asia Regional Dhaka Site 2009",
    issuer: "ACM International Collegiate Programming Contest",
    issued: "Awarded",
    result: "3rd Place",
    tags: ["CompetitiveProgramming", "Algorithms", "ProblemSolving", "Teamwork"],
  },
  {
    category: "award",
    name: "Divisional Mathematical Olympiad 2008, Dhaka",
    issuer: "Bangladesh Mathematical Olympiad Committee",
    issued: "Awarded",
    result: "Champion, Higher Secondary category",
    tags: ["Mathematics", "Olympiad", "ProblemSolving"],
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
