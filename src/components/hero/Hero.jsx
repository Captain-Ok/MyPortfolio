import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Akhil</span>
        </motion.h1>
        {/* Skills */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="Skills"
        >
          <motion.h2 variants={awardVariants} className="htitle" >A Full-Stack Web Developer</motion.h2>
          <motion.p variants={awardVariants}>
          Skilled in <span className="text-color">HTML, CSS, JavaScript, React.js, Next.js</span> and <span className="text-color">Express.js, Figma, Node.js, MongoDb</span> with a strong emphasis on developing interactive and user-friendly web experiences.
          </motion.p>
          <motion.div className="awardList">
            <motion.img src="/html.png" alt="" />
            <motion.img src="/css.png" alt="" />
            <motion.img src="/javascript.png" alt="" />
            <motion.img src="/tailwind.png" alt="" />
            <motion.img src="/reactjs.png" alt="" />
            <motion.img src="/figma.png" alt="" />
            <motion.img src="/Nodejs.png" alt="" />
            <motion.img src="/Mongo.webp" alt="" />
            <motion.img src="/next.svg" alt="next" />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
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
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="https://github.com/Captain-Ok?tab=overview&from=2025-01-01&to=2025-01-31" target="_blank">
            <img src="/Github.svg" alt="" />
          </motion.a>
          {/* <motion.a variants={followVariants} href="/">
            <img src="/Insta.svg" alt="" />
          </motion.a> */}
          {/* <motion.a variants={followVariants} href="/">
            <img src="/Twitter.svg" alt="" />
          </motion.a> */}
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Check Out</div>
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/AWS.png" alt="" />
          CERTIFICATION:  
          <br />
          SOLUTIONS ARCHITECTURE
          <br />
          JOB SIMULATION
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="https://wa.me/+918882601382" target="_blank"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.6)" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/prog.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
