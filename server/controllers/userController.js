// create an exportable object that contains the following methods: createUser, getUser, loginUser. also require the user model

const { User, Order } = require('../models')
// import sign token function from auth
const { signToken } = require('../utils/auth');

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
    async checkout({ user, body }, res) {
        // create the order, once the order is creted in mongoose. we need to push the orderId into the user. 
        try {

            const order = await Order.create(body);


            const updatedUser = await User.findByIdAndUpdate(user._id, {
                $push: { orders: order._id }
            }, { new: true })

            res.json(updatedUser)
        } catch (err) { 
            console.log(err);
            res.json(err)
        }

    },

}