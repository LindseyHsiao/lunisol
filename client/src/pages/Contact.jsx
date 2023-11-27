import promo from '../assets/promo.jpeg'
import { IoIosArrowDown } from "react-icons/io";


export default function Contact() {
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
                    <div className='faq-question'>
                        <p>What should I know before purchasing your products?</p>
                        <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
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