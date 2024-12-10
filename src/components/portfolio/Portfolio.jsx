import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
const items = [
  {
    id: 7,
    title: "Crous Maps App",
    techno: ["Reactjs" , "Mapbox", "TurfJs", "DirectionAPI", "Hostinger" ],
    img: "https://i.postimg.cc/Y0qpy4gZ/Screenshot-2024-09-20-124654.png",
    desc: "The objectif of this project is to develop a Maps that contains the available crous residence in France. You can search for a university and then see all the nearby residence in your location. Fell free to try it ....",
    
   
    site : "https://maps.haya-tech.net/",
  },
  {
    id: 6,
    title: "Haya Gpt app",
    techno: ["Reactjs" , "MUI", "Express", "jsonwebtoken", "Render", "  ContextApi", "MongoDB", "OPENAI" ],
    img: "https://i.postimg.cc/HLXsJ1dZ/Screenshot-2024-09-20-124249.png",
    desc: "The objectif of this project is to develop a conversational app that have the same fonctionalities of chatgpt. It uses the openai API to take answer to each input. Feel free to test the app...",
    github : "https://github.com/ayyoubiyouness/chatgpt/tree/master",
   
    site : "https://hayagpt.haya-tech.net/",
  },
  {
    id: 5,
    title: "Hotel reservation app",
    techno: ["Reactjs" , "CSS", "Express", "jsonwebtoken", "Render", "  ContextApi", "MongoDB", "framer-motion" ],
    img: "https://i.postimg.cc/L5yW45Wc/Screenshot-2024-09-20-122738.png",
    desc: "The objectif of this project is to have a powerful reservation app to reserve hotels in a city. It combines a lot of web developement technologies and code structure. See the live version ... ",
    github : "https://github.com/ayyoubiyouness/Booking-App/tree/master",
    video : "4oR6EabF1SM",
    site : "https://booking.haya-tech.net/",
  },
  {
    id: 1,
    title: "Adapt Herd App",
    techno: ["Language R", "Shiny", "HTML", "CSS", "Tidyvers", "Highcharts"],
    img: "https://umr-selmet.cirad.fr/var/umr_selmet/storage/images/umr-selmet/projet-scientifique/nos-projets/adapt-herd/37131-1-fre-FR/adapt-herd.png",
    desc: "This project, developed during my internship at INRAE, involved creating an application using R's Shiny for data visualization. Its purpose was to facilitate comparison of various climate change adaptation strategies, enabling the selection of the most relevant strategy for each case study.",
    github : "https://github.com/ayyoubiyouness/ayyoubiyouness.github.io/tree/main",
    video : "mR67reVYFgc",
    site : "https://younessayyoubi.shinyapps.io/adaptherdinrae/",
  },
  
  {
    id: 2,
    title: "Prompter App",
    techno: ["Node.Js", "Websocket", "HTML", "CSS", "JavaScript"],
    img: "https://static.lpnt.fr/images/2016/08/11/5045879lpw-5045878-jpg_3715714.jpg",
    desc: "This project was accomplished by a team of eight engineering students at Ecole Centrale Casablanca. We developed an application to manage scrolling texts on teleprompters in real-time. The application features two interfaces: one for scrolling the text and another for configuring the scroll settings, such as speed and text size adjustments.",
    github : "https://github.com/ayyoubiyouness/ayyoubiyouness.github.io/tree/main",
    video : "Z8a209lxFlU",
  },
  
  {
    id: 3,
    title: "Portfolio Version 1",
    techno: ["HTML", "CSS", "JavaScript"],
    img: "https://i.postimg.cc/SNM8CS6d/Screenshot-2023-12-08-003538.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github : "https://github.com/ayyoubiyouness/ayyoubiyouness.github.io/tree/main",
    site : "https://ayyoubiyouness.github.io/",
  },
  {
    id: 4,
    title: "Blind Source Separation",
    techno: ["Python", "Matlab", "Numpy", "matplotlib", "scipy"],
    img: "https://www.researchgate.net/publication/330913686/figure/fig2/AS:723451153223682@1549495604759/Blind-Source-Separation-Model-A-group-of-unknown-sources-are-mixed-together-to-produce-a.png",
    desc: "In this project, a team of four tackled the challenge of Blind Source Separation, aiming to extract clear information from a noisy signal. The goal was to use the Blind Source Separation algorithm, specifically focusing on minimizing penalized mutual information, to differentiate between instrumental and vocal sounds. To understand the workings of the algorithm, one can refer to the attached scientific paper that our team authored. The project received evaluation from Yan LuCan at the Techinov Days, an event celebrating the field of Data Science.",
    github : "https://github.com/ayyoubiyouness/Projet-Scientifique-Blind-Source-Separation-/tree/main",
    video : "eTcZ9zyfl-Q",
  },
  
  
  
];

const Single = ({ item }) => {
  const ref = useRef();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handleDemoClick = () => {
    
    
    navigate('/demo', {state: { title : item.title , techno : item.techno, github : item.github, video : item.video, site: item.site}} );
    console.log("youness")
  }

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;