"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
        // ,
        // validate(value) {
        //     if (value.toLowerCase().includes('password')) {
        //         throw new Error('Password cannot contain "password"')
        //     }
        // }
    },
    // image: {
    //     type: Image
    // },
    tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
}, {
    timestamps: true
});
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'backendapp', { expiresIn: '1d' });
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};
userSchema.statics.findByCredentials = async (userName, password) => {
    const user = await User.findOne({ userName, password });
    if (!user) {
        throw new Error('Unable to login');
    }
    // const isMatch = await bcrypt.compare(password, user.password)
    const isMatch = (password === user.password);
    if (!isMatch) {
        throw new Error('Unable to login');
    }
    return user;
};
// Hash the plain text password before saving
// userSchema.pre('save', async function (next) {
//     const user = this
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }
//     next()
// })
const User = mongoose_1.model('User', userSchema);
exports.User = User;
// module.exports = User
//# sourceMappingURL=user.js.map