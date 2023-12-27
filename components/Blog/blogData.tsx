import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Author Energy Limited",
    paragraph:
      "Experience the digital evolution of Author Energy Ltd. Our showcase reveals a fusion of sleek design, advanced functionality, and bespoke training, propelling their online presence to new heights. PrimeReserved—where energy meets excellence.",
    image: "/images/blog/project-01.jpg",
    author: {
      name: "PrimeReserved",
      image: "/images/blog/author.jpg",
      designation: "Web Development",
    },
    tags: ["Oil & Gas Industry"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "NoxylPrime Global Limited",
    paragraph:
      "At NoxylPrime Global Ltd, we've crafted and currently manage their website. This showcase captures the essence of our collaborative work, embodying the seamless integration of innovation and precision in every digital solution delivered.",
    image: "/images/blog/project-02.jpg",
    author: {
      name: "PrimeReserved",
      image: "/images/blog/author.jpg",
      designation: "Web Development",
    },
    tags: ["Oil & Gas Industry"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Dignity & Respect",
    paragraph:
      "At Dignity and Respect, our partnership extends beyond building a website — we've cultivated a digital presence that resonates with their values. Managing their online platform is a testament to our commitment, where every pixel reflects the harmonious blend of creativity and technical expertise.",
    image: "/images/blog/project-03.jpg",
    author: {
      name: "PrimeReserved",
      image: "/images/blog/author.jpg",
      designation: "Web Development",
    },
    tags: ["Health Care Industry"],
    publishDate: "2023",
  },
];
export default blogData;
