import { strictEqual } from "assert";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                ui_mode: 'embedded',
                line_items: [
                    {
                        price: '{{PRICE_ID}}',
                        quantity: 1
                    }
                ],
                mode: 'payment',
                return_url: `${req.headers.origin}return?session_id={CHECKOUT_SESSION_ID}`
            })
            res.send({clientSecret: session.client_secret})

        } catch (error) {
            res.status(error.statusCode).json(error.message)  
        }
    }
    if (req.method === 'GET') {
        try {
            const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
            res.send({
                status: session.status,
                customer_email: session.customer_email
            })
        } catch (error) {
            res.status(error.statusCode).json(error.message)
        }
    }
}