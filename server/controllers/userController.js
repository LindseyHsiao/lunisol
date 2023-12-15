// create an exportable object that contains the following methods: createUser, getUser, loginUser. also require the user model

const { User, Order } = require('../models')
// import sign token function from auth
const { signToken } = require('../utils/auth');

require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SK)

module.exports = {
    async createUser(req, res) {
        const user = await User.create(req.body);

        if (!user) {
            res.status(400).json({ message: "data not correct" })
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { email: params.email }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async checkout(req, res) {
        const url = 'http://localhost:5173'
        const order = await Order.create(req.body)
        const lineItems = []

        const { products } = await Order.findById(order._id).populate('products')

        for (let i = 0; i < products.length; i++) {
            const product = await stripe.products.create({
                name: products[i].productName,
                description: products[i].description,
                // possibly the images
            });

            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: products[i].price * 100,
                currency: 'usd'
            })

            lineItems.push({
                price: price.id,
                quantity: 1
            })

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                lineItems,
                mode: 'payment',
                success_url: `${url}/success?session_id:{CHECKOUT_SESSION_ID}`,
                cancel_url: url
            })

            return { session: session.id }
        }
    },

}