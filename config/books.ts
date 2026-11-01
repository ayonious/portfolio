export type Book = {
  title: string;
  authors: string;
  details?: string;
  tags: string[];
  url: string;
};

export const programmingBooks: Book[] = [
  {
    title: "Clean Code",
    authors: "Robert C. Martin",
    tags: ["Programming", "CleanCode", "SoftwareEngineering"],
    url: "https://www.goodreads.com/book/show/3735293-clean-code",
  },
  {
    title: "Introduction to Algorithms (CLRS)",
    authors: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    tags: ["Programming", "Algorithms", "ComputerScience"],
    url: "https://www.goodreads.com/book/show/170440006-introduction-to-algorithms",
  },
  {
    title: "The C Programming Language",
    authors: "Brian Kernighan and Dennis Ritchie",
    details: "First published in 1978; second edition published in 1988.",
    tags: ["Programming", "C", "SystemsProgramming"],
    url: "https://www.goodreads.com/book/show/16174690-the-c-programming-language",
  },
  {
    title: "Concrete Mathematics: A Foundation for Computer Science",
    authors: "Ronald Graham, Donald Knuth, and Oren Patashnik",
    tags: ["Mathematics", "ComputerScience", "Algorithms"],
    url: "https://www.goodreads.com/en/book/show/112243.Concrete_Mathematics",
  },
  {
    title: "Discrete Mathematics and Its Applications",
    authors: "Kenneth H. Rosen",
    tags: ["Mathematics", "DiscreteMath", "ComputerScience"],
    url: "https://www.goodreads.com/book/show/66553629-discrete-mathematics-and-its-applications",
  },
];

export const otherBooks: Book[] = [
  {
    title: "Surrounded by Idiots",
    authors: "Thomas Erikson",
    tags: ["Psychology", "Communication", "HumanBehavior"],
    url: "https://www.goodreads.com/book/show/50542352-surrounded-by-idiots",
  },
];
