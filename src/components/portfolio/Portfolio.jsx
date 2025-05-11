import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/P_01.png",
    title: "A LinkStack",
    desc: "AllLinks is a responsive web application that lets users create a single, customizable page to display multiple links. Each user can sign in using NextAuth and create a profile that includes their name, profile picture, and a list of personal or professional links (e.g., social media, portfolios, or websites). The frontend is built with Next.js and styled using Tailwind CSS to ensure mobile-friendly and clean layouts across devices. Although login functionality is set up, it currently doesn’t restrict access. The goal is to provide a simple, functional alternative to services like Linktree, with room for future enhancements such as user authentication.",
    link: "http://www.linphasetechnology.com/",
  },
  {
    id: 2,
    img: "/P_02.png",
    title: "Url Shortener",
    desc: "URL Shortener is a web application designed to simplify long, complex URLs into short, shareable links. Built using modern web technologies, it features a clean, responsive interface where users can input any valid URL and receive a compact version that redirects seamlessly to the original address. The application securely stores each shortened URL in a MongoDB database, allowing for easy management and scalability. This project demonstrates practical use of backend logic, database integration, and user-friendly design — making it both a functional tool and a showcase of full-stack development skills.",
    link: "/",
  },
  {
    id: 3,
    img: "/P_03.png",
    title: "Password manager",
    desc: "An intuitive application designed to help users store, manage, and retrieve their login credentials efficiently. It supports both local storage for offline use and database integration for persistent, cloud-based access, ensuring data security through structured handling and user-friendly interaction.",
    link: "/",
  },
  {
    id: 4,
    img: "/P_04.png",
    title: "Login page unique design",
    desc: "This is a uniquely designed login page that features interactive animations aimed at creating a positive and welcoming user experience. The engaging visual elements are thoughtfully crafted to evoke a sense of comfort and delight, encouraging users to log in with ease and confidence.",
    link: "/",
  },
  {
    id: 5,
    img: "/P_05.png",
    title: "Mp3 Music Player",
    desc: "This MP3 player is a front-end application built using Js logics, designed to play audio files retrieved from the browser's local storage. It offers core features such as play, pause, skip, and track navigation. By utilizing local storage, the application ensures fast access to stored songs and provides a smooth, music experience for users, all within an intuitive and responsive interface.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/scrollmore.svg" alt="" />
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }} >
            <span className="textProject" >Browse through the projects</span>
            <span className="textProject" >I've developed, demonstrating my</span>
            <span className="textProject" >skills in full-stack development.</span>

            <svg
              style={{ marginTop: "20px" }}
              width="70px"
              height="70px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path
                animate={{ y: [0, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <p style={{
              fontSize: "18px",
            }} >Scroll</p>
          </div>
        </div>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#e1a809"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
