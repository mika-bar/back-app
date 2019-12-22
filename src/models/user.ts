import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUser{
    firstName:string;
    lastaname:string;



}


const userSchema = new mongoose.Schema({
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
    userName:{
        type: String,
        required: true
    },
    password:{
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
})


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({ email })

//     if (!user) {
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch) {
//         throw new Error('Unable to login')
//     }

//     return user
// }

// Hash the plain text password before saving
// userSchema.pre('save', async function (next) {
//     const user = this

//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }

//     next()
// })


export const User = mongoose.model('User', userSchema);

// module.exports = User
