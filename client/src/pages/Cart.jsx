import React from 'react'
import promo from '../assets/promo.jpeg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../utils/API'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from '../utils/actions'


export default function Cart({setTotalQuant, totalQuant}) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [productData, setProductData] = useState({})

    const { cart } = state;


    const addToCart = (cartItem) => {
        const itemInCart = cart.find((item) => item._id === cartItem._id)
        if (itemInCart) {
            console.log(itemInCart);
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: cartItem._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity)
            })
        } 

    }

    const removeFromCart = (cartItem) => {
        // console.log(cartItem);
        // const itemInCart = cart.find((item) => item._id === cartItem._id)
        // if (itemInCart) {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: cartItem._id,
        })

        // }

    }


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

    useEffect(() => {
        function total() {

            if (cart.length ) {
                let sum = 0
                const objectKeys = Object.keys(cart[0])
                objectKeys.forEach(key => {
                    sum = 0
                    // console.log(key);
                    cart.map((entry) => {
                        console.log(entry);
                        sum += entry['purchaseQuantity'];
                    })
                })
                setTotalQuant(sum);
            }else{
                setTotalQuant(0)
            }
        }
        total()
    }, [cart])

  

    const handleChange =  (event, productData) => {
        let value =  event.target.value;
        const updatedProd =  { ...productData, purchaseQuantity: parseInt(value)}
        console.log(updatedProd);
    }
    
    const totalItemPrice = (productData) => {
        parseInt(productData.price) * parseInt(productData.purchaseQuantity)
    }


    return (

        <div className='cart-page'>
            <div className='cart-page-left-banner'>
                <h2>My Bag</h2>
                <p>{totalQuant} items</p>
            </div>
            {cart.length ? (
                <div>
                    {cart.map((item) => (
                        <div className='cart-product-details'>
                            <Link to={`/singleproduct/${item._id}`}>
                                <img className='cart-product-details-img' src={item.productImage} alt={item.productImage} />
                            </Link>

                            <div className='cart-product-details-details'>
                                <div className='cart-item-name'>
                                    <h3>{item.productName}</h3>
                                    <p>product details</p>
                                    <button onClick={() => removeFromCart(item)}>remove</button>
                                </div>
                                <div className='item-specs'>
                                    <div>
                                        <h4>Item Price</h4>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className='cart-selector'>
                                        <label for="quantity-select">Quantity</label>
                                        <select name="quantity" id="quantity-select" onChange={(e) => handleChange(e, item)}>
                                            <option value="num-of-item">{item.purchaseQuantity}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h4>Total Price</h4>
                                        <p>{totalItemPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='empty-bag'>
                    <h2>Give your bag some love!</h2>
                    <Link to='/shop'><button>Shop whats new</button></Link>
                </div>
            )
            }


        </div>


    )
}
