import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string || 'sk_test_51QFCP1FveiJZYzXgtWPpwIbUocns42Jf5WB9pS5e81C0jHb7P9oo4IkkCT8LhtdqsUj2UdJ3xyYIFtXevZVnhXeu00VBdKEccf')


export default stripe