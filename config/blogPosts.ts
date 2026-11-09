export type BlogPost = {
  title: string;
  summary: string;
  url: string;
};

const blogBaseUrl = "https://ayonious.github.io/that-it-guy-tech-blog/blogs";

export const featuredBlogPosts: BlogPost[] = [
  {
    title: "Higher-Order Components in React",
    summary:
      "An example-led introduction to sharing behavior between React components with the higher-order component pattern.",
    url: `${blogBaseUrl}/react-hoc`,
  },
  {
    title: "Send a Secret Message",
    summary:
      "A practical explanation of asymmetric encryption and how public and private keys can be used to exchange sensitive information.",
    url: `${blogBaseUrl}/send-password-rsa`,
  },
  {
    title: "Viewport Tag in HTML",
    summary:
      "Why responsive layouts can still look zoomed out on mobile, and how the viewport meta tag fixes the problem.",
    url: `${blogBaseUrl}/viewport-tag-html`,
  },
  {
    title: "Throttle and Debounce",
    summary:
      "A comparison of two techniques for limiting frequent browser events such as scrolling, resizing, and typing.",
    url: `${blogBaseUrl}/js-throttling-debounce`,
  },
  {
    title: "Finding the Type of Data in JavaScript",
    summary:
      "A compact JavaScript reference for identifying strings, numbers, arrays, objects, and other common data types.",
    url: `${blogBaseUrl}/js-find-datatype`,
  },
  {
    title: "The JavaScript var Keyword",
    summary:
      "An exploration of function scope, hoisting, and the surprising behavior that makes legacy var declarations difficult to reason about.",
    url: `${blogBaseUrl}/js-var-keyword`,
  },
  {
    title: "Arrow Functions or Normal Functions?",
    summary:
      "A practical comparison of function syntax and the important differences in how arrow and normal functions handle this.",
    url: `${blogBaseUrl}/js-arrow-vs-normal-function`,
  },
  {
    title: "Closures in JavaScript",
    summary:
      "How inner functions retain access to their outer scope, with examples of closures used for private state and reusable behavior.",
    url: `${blogBaseUrl}/js-closures`,
  },
  {
    title: "Create a CLI Tool Using TypeScript",
    summary:
      "A step-by-step account of building a TypeScript command-line tool that turns JSON data into readable console tables.",
    url: `${blogBaseUrl}/node-cli`,
  },
  {
    title: "Debugging React",
    summary:
      "A guide to diagnosing React applications with debugger statements, browser developer tools, and performance flame graphs.",
    url: `${blogBaseUrl}/react-debugging`,
  },
];
