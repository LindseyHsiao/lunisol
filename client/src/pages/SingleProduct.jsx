import promo from '../assets/promo.jpeg'
import largeYellowLogo from '../assets/largeYellowLogo.png'
import { PiPlus } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../utils/API';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions'



export default function SingleProduct() {
    const { id } = useParams()
    const [productData, setProductData] = useState({})
    const [counter, setCounter] = useState(1)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }

    const handleClick2 = () => {
        if (counter > 0)
            setCounter(counter - 1)
    }

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const { cart } = state;

    const addToCart = (cartItem) => {
        const itemInCart = cart.find((item) => item._id === cartItem._id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: cartItem._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + counter
            })
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...cartItem, purchaseQuantity: counter }
            })
        }

    }
    console.log(cart);


    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await getOneProduct(id)
                if (!response.ok) {
                    throw new Error('data didnt fetch')
                }
                const singleItem = await response.json()
                setProductData(singleItem)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])
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
                        <h2>{productData.productName}</h2>
                        <p>0.35 fl oz</p>
                        <p>Choose me for a natural pick me up. An invigorating blend of peppermint</p>
                        <p>Quantity</p>
                        <div className='quantity'>
                            <div onClick={handleClick2}><PiMinus /></div>
                            <div>{counter}</div>
                            <div onClick={handleClick1}><PiPlus /></div>
                        </div>
                        <button className='single-item-button' onClick={() => addToCart(productData)}>Add to Cart</button>
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