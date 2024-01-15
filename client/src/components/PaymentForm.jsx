import { useState } from 'react'
import { CardElement, useElements, useStripe, PaymentElement} from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()


        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });


        console.log(result);


        // if (!error) {
        //     try {
        //         const { id } = paymentMethod
        //         const response = await axios.post("http://localhost:3001/payment", {
        //             amount: 1000,
        //             id
        //         })

        //         if (response.data.success) {
        //             console.log('Successful payment')
        //             setSuccess(true)
        //         }
        //     } catch (error) {
        //         console.log("Error", error)
        //     }
        // } else {
        //     console.log(error.message)
        // }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    {/* <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset> */}
                    <PaymentElement />
                    <button disabled={!stripe}>Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought a sweet spatula</h2>
                </div>
            }
        </>
    )
}
