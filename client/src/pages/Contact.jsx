import promo from '../assets/promo.jpeg'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';


export default function Contact() {
    const [expand, setExpand] = useState(false)

    const variants = {
        open: {
            opacity: 1,
            height: 'auto'
        },
        collapsed: {
            opacity: 0,
            height: 0
        },
        transition: {
            duration: 0.5,
            ease: [0.04, 0.62, 0.23, 0.98]
        }
    }

    return (
        <section>
            <div className='contact'>
                <div>
                    <img className='contact-img' src={promo} alt="" />
                </div>
                <div className='stay-in-touch'>
                    <h1>Stay in Touch</h1>
                    <div>
                        <p>instagram: @lunisolWellnes</p>
                        <p>Email: LunisolWellness@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='faq'>
                <div>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className='product-faq'>
                    <h3>Product FAQs</h3>
                    <div
                    //  className='faq-question'
                     >
                        <motion.header
                            initial={false}
                            animate={{ backgroundColor: expand ? '#fff' : "#fff" }}
                            onClick={() => setExpand(!expand)}
                        >What should I know before purchasing your products? <IoIosArrowDown /></motion.header>
                        <AnimatePresence initial={false}>
                            {expand && (
                            <motion.section
                                key='content'
                                initial='collapsed'
                                animate='open'
                                exit='collapsed'
                                variants={variants}
                                
                            >
                                <p>answer</p>
                            </motion.section>
                            )}
                        </AnimatePresence>
                        {/* <div className="values-icon-down-arrow"></div> */}
                    </div>
                </div>
                <div className='product-faq'>
                    <h3>Shipping & Return FAQs</h3>
                    <div className='faq-question'>
                        <p>What should I know before purchasing your products?</p>
                        <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                    </div>
                </div>
            </div>

        </section>
    )
}