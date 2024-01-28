import { useState } from "react";
import { createOrder } from "../utils/API"
import { useSelector } from 'react-redux'

export default function Checkout() {
    
    const cart = useSelector(state => state.cart);
    const [checkoutData, setCheckoutData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckoutData({ ...checkoutData, [name]: value })
    }

    const checkOutStripe = async () => {
        const cartFormat = await cart.map((item)=> ({
            name: item.productName, 
            description: item.description,
            images:[item.productImage],
            quantity: item.purchaseQuantity,
            price: item.price
        }))

        localStorage.setItem('cart', JSON.stringify(cart))
       
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartFormat)
            })

            if (response.ok) {
                const data = await response.json()

                window.location.replace(data.url);
                // if(!data.url){

                // }else{

                // }
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('calling on submit');

        try {
            const response = await createOrder(checkoutData)
            if (!response.ok) {
                throw new Error('wrong imputs')
            }
            // send to stripe
            checkOutStripe();
            // console.log(response)

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="login">
                <h2>Checkout</h2>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input required className="email-input" type="email" placeholder="Enter your email" value={checkoutData.email} name="email" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="firstName">First Name</label>
                    <input className="email-input" type="firstName" placeholder="Enter your first name" value={checkoutData.firstName} name="firstName" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="email-input" type="lastName" placeholder="Enter your last name" value={checkoutData.lastName} name="lastName" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input className="email-input" type="phoneNumber" placeholder="Enter your phone number" value={checkoutData.phoneNumber} name="phoneNumber" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="address">Address</label>
                    <input className="email-input" type="address" placeholder="Enter your address" value={checkoutData.address} name="address" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="city">City</label>
                    <input className="email-input" type="city" placeholder="Enter your city" value={checkoutData.city} name="city" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="state">State</label>
                    <input className="email-input" type="state" placeholder="Enter your state" value={checkoutData.state} name="state" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="zipCode">Zip code</label>
                    <input className="email-input" type="zipCode" placeholder="Enter your zip code" value={checkoutData.zipCode} name="zipCode" onChange={handleChange} />
                </div>
                <button className="sign-up-button" type="submit">Go to Next Step</button>
            </form>

        </div>
    )
}
