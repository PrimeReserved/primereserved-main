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
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
