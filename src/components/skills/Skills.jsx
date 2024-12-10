import './skills.scss';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const variants = {
  initial: {
    x: 0,
    y: '50vh',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  { name: 'python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png' },
  { name: 'R', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png' },
  { name: 'javascript', icon: 'https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg' },
  { name: 'react', icon: 'https://www.angleritech.com/wp-content/uploads/2020/10/reactjs-web-development-company.png' },
  { name: 'nodejs', icon: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png' },
  { name: 'html', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'css', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },

  { name: 'Postgresql', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
  { name: 'power bi', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png' },

  { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png' },
  { name: 'php', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' },
  { name: 'java', icon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/550px-Java_Logo.svg.png' },

];

const experiences = [
  { year: 2024, title: 'Full stack Engineer Freelancer',time : "2 month", company: 'Bouge,  Remote work', desc: " " },
  { year: 2024, title: 'Software Engineer Intern',time : "6 month", company: 'FEV FRANCE,  Paris, France', desc: " " },
  { year: 2024, title: 'Web developper Intern',time : "6 month", company: 'Bouge,  Hyères, France', desc: "During my six-month internship, I joined a startup specializing in providing updated sports maps with all the sports facilities in a city. My role involved overseeing the company's development aspect, under the guidance of former company developers working as freelancers. This experience served as an introduction to the entrepreneurial world." },
  { year: 2023, title: 'Data Analyst Intern', time : "3 month", company: 'INRAE, Montpellier, France', desc: "In this internship, I had the chance to work on an international project involving Egypt, France, Spain, and Tunisia, and to collaborate with researchers in livestock management. The main goal was to develop a data visualization interface called 'Adapt Herd'." },
  { year: 2020, title: 'internship observation ', time : "2 month", company: 'Bayer, Casablanca, Maroc', desc: "During my internship, I joined a multinational pharmaceutical company, allowing me to learn how large organizations operate. My responsibilities included helping on implementing a maintenance management platform and managing the restoration and backup of pharmaceutical production machines." },
];

const Skills = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <>
      <div className='header'>Skills & Experience</div>


      <motion.div className="skills-experiences"
        variants={variants} initial="initial" whileInView="animate"
      >


        <div className="skills">
          {skills.map(skill => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="experiences">
          {experiences.map((exp) => (
            <motion.div
              className="experience"
              key={exp.title}
              onMouseEnter={() => setHovered(exp.title)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -10, boxShadow: "0px 5px 10px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="year-title">
                <span className="year">{exp.year}</span>
                <span className="title">{exp.title}</span>
              </div>
              <span className="company">{exp.company}</span>
              <span className="company">{exp.time}</span>
              {hovered === exp.title && (
                <motion.div
                  className="description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.desc}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;















