import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = "pk_test_51ONh8QIh5BoOs8BLQGh8X7QULs5l4rRmLTa3f6EshemeOML6Nbvx4d6oDaOVQ56WjhAp4UNPj70VWjpBxQ1DccbF00pvtPqLiD"


const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
