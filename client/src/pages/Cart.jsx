import React from 'react'
import promo from '../assets/promo.jpeg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../utils/API'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from '../utils/actions'


export default function Cart() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    // const [productData, setProductData] = useState({})
    const [totalQuant, setTotalQuant] = useState(0)




    const { cart } = state;

    const addToCart = (cartItem) => {
        const itemInCart = cart.find((item) => item._id === cartItem._id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: cartItem._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity)
            })
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...cartItem, purchaseQuantity: counter }
            })
        }

    }

    const removeFromCart = (cartItem) => {
        const itemInCart = cart.find((item) => item._id === cartItem._id)
        if (itemInCart) {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: cartItem._id,
                // product: { ...cartItem, purchaseQuantity: 0 }
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
    }, [cart])

    useEffect(() => {
        function total() {

            if (cart.length > 0) {
                let sum = 0
                const objectKeys = Object.keys(cart[0])
                objectKeys.forEach(key => {
                    sum = 0
                    console.log(key);
                    cart.map((entry) => {
                        console.log(entry);
                        sum += entry['purchaseQuantity'];
                    })
                })
                setTotalQuant(sum);
            }
        }
        total()
    }, [cart])


    return (

        <div className='cart-page'>
            <div className='cart-page-left-banner'>
                <h2>My Bag</h2>
                <p>3 items</p>
            </div>

            {cart?.map((item) => (
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
                                <select name="quantity" id="quantity-select" >
                                    <option value="num-of-item">{item.purchaseQuantity}</option>
                                    <option value="num-of-item">1</option>
                                    <option value="num-of-item">2</option>
                                    <option value="num-of-item">3</option>
                                    <option value="num-of-item">4</option>
                                    <option value="num-of-item">5</option>
                                </select>
                            </div>
                            <div>
                                <h4>Total Price</h4>
                                <p>58.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))} :
            {
                <div className='empty-bag'>
                    <h2>Give your bag some love!</h2>
                    <Link to='/shop'><button>Shop whats new</button></Link>
                </div>
            }

        </div>


    )
}
