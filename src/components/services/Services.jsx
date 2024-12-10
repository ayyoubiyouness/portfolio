import React from 'react'
import './services.scss';
import { motion } from "framer-motion"


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
const Services = () => {



    return (
        <motion.div className="services" variants={variants} initial="initial" whileInView={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                I am a problem solver 
                    <br /> my skills in engineering turn challenges into innovations
                </p>
                <hr />

            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <h1>  My <motion.b whileHover={{ color: "orange" }}>Education</motion.b> </h1>
                </div>
                <div className="title">
                    <img src="/people.webp" alt="" />


                    

                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <button>2023</button>
                    <h2>Marseille Central School</h2>
                    <p>
                    During my engineering studies, I participated in a semester-long exchange program at the École Centrale de Marseille, specializing in Data Science. This experience provided me with the chance to meet new people and engage in various projects. Key courses included statistics, probability, machine learning, and neural networks.
                    </p>

                </motion.div>
                <motion.div
                    className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <button>2021-2023</button>
                    <h2>Casablanca Central School</h2>
                    <p>
                    In my first year, I was fortunate to receive a generalist training, which provided me with insights into various engineering fields. This period also presented opportunities to work on multiple projects across different domains and to involve myself in associative activities. Noteworthy courses included Project Management, Fluid Mechanics, Partial Differential Equations, Artificial Intelligence, and Corporate Finance. 
                        
                    </p>

                </motion.div>
                <motion.div
                    className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <button>2019-2021</button>
                    <h2>Preparatory class: Mathematics-Physics</h2>
                    <p>
                        
During the two years of my preparatory classes, I received a solid theoretical foundation in mathematics, physics, electricity, chemistry, and engineering science. This provided me with a strong base to delve into various scientific fields and successfully pursue my engineering studies.
                    </p>


                </motion.div>
                
            </motion.div>


        </motion.div>
    )
}

export default Services
