import hands from '../assets/smallLogo.png'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Auth from '../utils/auth'

import { useDispatch, useSelector } from 'react-redux'

export default function Header({totalQuant, setTotalQuant}) {
    const [hoverShop, setHoverShop] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)
    const [hoverUser, setHoverUser] = useState(false)
    // const [totalQuant, setTotalQuant] = useState(0)

    const state = useSelector((state) => state)

    const { cart } = state;

    useEffect(() => {
        function total() {

            if (cart.length > 0) {
                let sum = 0
                const objectKeys = Object.keys(cart[0])
                objectKeys.forEach(key => {
                    sum = 0
                    // console.log(key);
                    cart.map((entry) => {
                        // console.log(entry);
                        sum += entry['purchaseQuantity'];
                    })
                })
                setTotalQuant(sum);
            }
        }
        total()
    }, [cart])


    const toggleHoverShop = () => {
        setHoverShop(!hoverShop)
    }
    const toggleHoverAbout = () => {
        setHoverAbout(!hoverAbout)
    }
    const toggleHoverContact = () => {
        setHoverContact(!hoverContact)
    }
    const toggleHoverUser = () => {
        setHoverUser(!hoverUser)
    }


    const variantUserIcon = {
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
                    <h3 className='header-name'>LUNISOL WELLNESS</h3>
                </div>
            </Link>
            <div className='nav-container'>
                <nav className='nav-left'>

                    <motion.div
                        onHoverStart={toggleHoverShop}
                        onHoverEnd={toggleHoverShop}
                        className='dropdown nav-item'
                    >
                        <Link to='/shop'><p>Shop</p></Link>
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

                    {/* <Link to='#' className='nav-item'>Blog</Link> */}

                </nav>
                <nav className='nav-right'>
                    <input type='text' placeholder='Search' className='nav-item' />
                    <Link to='/cart' className='nav-item nav-bag'>
                        <MdOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
                        </Link>
                        <div className='shop-bag-num'>
                            <p>{totalQuant}</p>
                        </div>
                    

                    <motion.div
                        onHoverStart={toggleHoverUser}
                        onHoverEnd={toggleHoverUser}
                        className='dropdown nav-item'
                    >
                        <FaUserCircle />
                        <motion.nav
                            className="dropdownOptions"
                            initial='exit'
                            animate={hoverUser ? 'enter' : 'exit'}
                            variants={variantUserIcon}
                        >
                            {Auth.loggedIn()
                                ? (<div><Link onClick={Auth.logout}>Logout</Link>
                                    <Link to="#">Account</Link></div>)
                                : (<div><Link to="/login">Login</Link>
                                    <Link to="/signup">Sign Up</Link>
                                </div>)}

                        </motion.nav>
                    </motion.div>
                </nav>
            </div>
        </header>
    )
}