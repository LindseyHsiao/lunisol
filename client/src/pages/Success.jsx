import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { EMPTY_CART } from "../utils/actions";

export default function Success({setTotalQuant}) {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()


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


  return (
    <div>Success</div>
  )
}
