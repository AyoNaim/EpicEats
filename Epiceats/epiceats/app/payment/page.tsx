"use client"

import React from 'react'
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { fetchClientSecret } from '../actions/checkout'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const payment = () => {
  return (
    <section>
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    </section>
  )
}

export default payment