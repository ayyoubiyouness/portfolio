import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <motion.span 
                    initial = {{opacity:0, scale:0.5}}
                    animate = {{opacity:1, scale : 1}}
                    transition = {{duration : 0.5}}
                    >Ayyoubi Youness</motion.span>
                <div className='social'>
                    <a href="https://www.facebook.com/youness.ayyoubi"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>

                    <a href="https://www.youtube.com/channel/UCslBjLgLTPymRmPDH_wGkfw"><img src="/youtube.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/youness-ayyoubi-24a943226/"><img src="/LinkedIn.png" alt="" /></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar
