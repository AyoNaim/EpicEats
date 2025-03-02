"use server"

import stripe from "@/utils/stripe"

export async function fetchClientSecret() {
    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: [
            {
                price: 'price_1QFtEkFveiJZYzXgEpDDc0Mm',
                quantity: 1
            }
        ],
        mode: 'payment',
        return_url: 'https://3000-ayonaim-epiceats-54r7dio3aqu.ws-eu117.gitpod.io/success'
    })
    return session.client_secret;
}