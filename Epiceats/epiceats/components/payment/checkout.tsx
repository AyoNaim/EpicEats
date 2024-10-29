import React, {useCallback} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
const checkout = () => {
    const fetchClientSecret = () => useCallback(() => {
        return fetch('/payment-checkout', {
            method: 'POST'
        })
            .then((res) => res.json)
            .then((data) => data.clientSecret)
    }, []);
    const options = {fetchClientSecret};
    return (
        <div>
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout/>
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default checkout