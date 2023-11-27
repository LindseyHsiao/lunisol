import promo from '../assets/promo.jpeg'
import largeYellowLogo from '../assets/largeYellowLogo.png'
import { PiPlus } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";




export default function SingleProduct() {
    return (
        <section>
            <div className='single-product-page'>
                <div className='single-product-img'>
                    <div>
                        <img src={promo} alt="" />
                    </div>
                    <div className='single-product-shots'>
                        <img src={promo} alt="" />
                        <img src={promo} alt="" />
                        <img src={promo} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Product Name</h2>
                        <p>0.35 fl oz</p>
                        <p>Choose me for a natural pick me up. An invigorating blend of peppermint</p>
                        <p>Quantity</p>
                        <div className='quantity'>
                            <div><PiMinus /></div>
                            <div>1</div>
                            <div><PiPlus /></div>
                        </div>
                        <button className='single-item-button'>Add to Cart</button>
                    </div>
                    <div className='product-dropdown-how-to'>
                        <div className='faq-question'>
                            <p>How to use</p>
                            <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                        </div>
                        <div className='faq-question'>
                            <p>How to store</p>
                            <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                        </div>
                        <div className='faq-question'>
                            <p>How to store</p>
                            <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                        </div>
                        <div className='faq-question'>
                            <p>How to store</p>
                            <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='you-may-also-like'>
                <div>
                    <h3>You may also like</h3>
                </div>
                <div className='products'>
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                </div>
            </div>



        </section>
    )
}