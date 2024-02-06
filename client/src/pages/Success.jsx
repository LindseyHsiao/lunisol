import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { EMPTY_CART } from "../utils/actions";
import { useParams } from 'react-router-dom';
import { getOneOrder } from '../utils/API';


export default function Success({ setTotalQuant }) {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [orderData, setOrderData] = useState({})


  const { cart } = state;


  console.log(cart);
  const effect = () => {
    // Check to see if this is a redirect back from Checkout

    const removeFromCart = (cartItem) => {
      // console.log(cartItem);
      // const itemInCart = cart.find((item) => item._id === cartItem._id)
      // if (itemInCart) {
      dispatch({
        type: EMPTY_CART,
        // _id: cartItem._id,
      })
      setTotalQuant(0)
      // }

    }
    removeFromCart()

  };

  useEffect(effect, [])

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await getOneOrder(id)
        if (!response.ok) {
          throw new Error('data didnt fetch')
        }
        const order = await response.json()
        setOrderData(order)
      } catch (error) {
        console.log(error)
      }
    }
    getOrder()
  }, [])

  console.log(orderData)

  return (
    <div className='empty-bag'>
      <h2>Thanks for shopping Lunisol</h2>
      <p>your order number is {orderData._id}</p>
      {/* <Link to='/shop'><button>Shop whats new</button></Link> */}
    </div>
  )
}
