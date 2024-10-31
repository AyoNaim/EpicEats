"use server"

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createCheckoutSession() {
    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            ui_mode: 'embedded',
            line_items: [
                {
                    price: 'price_1QFtEkFveiJZYzXgEpDDc0Mm',
                    quantity: 1
                }
            ],
        })
        return { clientSecret: session.client_secret}
    } catch (error:any) {
        console.log(error)
    }
}
