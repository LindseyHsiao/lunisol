import hands from '../assets/smallLogo.png'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";
import { motion } from 'framer-motion'
import { useState } from "react";

export default function Header() {
    const [hoverShop, setHoverShop] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

    const toggleHoverShop = () => {
        setHoverShop(!hoverShop)
    }
    const toggleHoverAbout = () => {
        setHoverAbout(!hoverAbout)
    }
    const toggleHoverContact = () => {
        setHoverContact(!hoverContact)
    }


    const menuAnimate = {
        enter: {
            // opacity: 1, 
            // rotateX: 0,
            // transition: {
            //     duration: 0.3
            // },
            // display: 'block'
            scale: 1,
            transition: {
                type: 'spring',
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.05
            },
        },
        exit: {
            // opacity: 0,
            // rotateX: -15,
            // transition: {
            //     duration: 0.3,
            //     delay: 0.1
            // },
            // transitionEnd: {
            //     display: 'none'
            // }
            scale: 0,
            transition: {
                delay: 0.15
            }
        }
    }

    const variants = {
        enter: {
            opacity: 1,
            y: 0,
            display: 'block'
        },
        exit: {
            opacity: 0,
            y: -5,
            transition: {
                duration: 0.3
            },
            transitionEnd: {
                display: 'none'
            }
        }
    }
    return (
        <header>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={hands} alt="lunisol logo" className='header-logo' />
                    <h1 className='header-name'>LUNISOL WELLNESS</h1>
                </div>
            </Link>
            <div className='nav-container'>
                <nav className='nav-left'>

                    <motion.div
                        onHoverStart={toggleHoverShop} 
                        onHoverEnd={toggleHoverShop} 
                        className='dropdown nav-item'
                    >
                        <p
                          
                        >Shop</p>
                        <motion.nav
                            className="dropdownOptions"
                            initial='exit'
                            animate={hoverShop ? 'enter' : 'exit'}
                            variants={variants}
                        >
                            <Link to="/shop">All</Link>
                            <Link to="#">Face</Link>
                            <Link to="#">Body</Link>
                            <Link to="#">Seasonal</Link>
                        </motion.nav>
                    </motion.div>


                    <motion.div
                        onHoverStart={toggleHoverAbout} 
                        onHoverEnd={toggleHoverAbout} 
                        className='dropdown nav-item'
                    >
                        <p>About</p>
                        <motion.nav
                            className="dropdownOptions"
                            initial='exit'
                            animate={hoverAbout ? 'enter' : 'exit'}
                            variants={variants}
                        >
                            <Link to="/story">Our Story</Link>
                            <Link to="/ourvalues">Our Values</Link>
                        </motion.nav>
                    </motion.div>

                    <motion.div
                        onHoverStart={toggleHoverContact} 
                        onHoverEnd={toggleHoverContact} 
                        className='dropdown nav-item'
                    >
                        <p>Contact</p>
                        <motion.nav
                            className="dropdownOptions"
                            initial='exit'
                            animate={hoverContact ? 'enter' : 'exit'}
                            variants={variants}
                        >
                            <Link to="/contact">Stay in Touch</Link>
                            <Link to="#">FAQ</Link>
                        </motion.nav>
                    </motion.div>

                    <Link to='#' className='nav-item'>Blog</Link>

                </nav>
                <nav className='nav-right'>
                    <input type='text' placeholder='Search' className='nav-item'></input>
                    <a href='#' className='nav-item'>
                        <MdOutlineShoppingBag />
                    </a>
                </nav>
            </div>
        </header>
    )
}