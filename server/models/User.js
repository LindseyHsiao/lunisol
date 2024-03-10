// user model will need to store email, password, array of orders,  cart
const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]
        // cart: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Cart'
        // }

    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User