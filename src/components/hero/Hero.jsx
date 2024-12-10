import React from 'react'
import './hero.scss'
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            straggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};
const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };
const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants}
                    initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>YOUNESS AYYOUBI</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer and Data Scientist</motion.h1>
                    <motion.div className='buttons'>
                        <motion.button variants={textVariants} href="#Contact">See the Latest Work</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" alt="" animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >Engineering Student 
            </motion.div>
            <div className='imageContainer'>
                {/* <img src="/hero.png" alt="" /> */}

            </div>

        </div>
    )
}

export default Hero
