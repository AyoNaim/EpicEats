import React, {useState, useEffect} from "react";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession } from "../actions/checkout";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const [clientSecret, setclientSecret] = useState('');
    useEffect(() => {
        async function fetchSession() {
            try {
                const session = await createCheckoutSession();
                                
            } catch (error:any) {
                console.log(error)
            }
        }
    }, [])
    
    return (
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={}
        >
            <EmbeddedCheckout/>
        </EmbeddedCheckoutProvider>
    )
}