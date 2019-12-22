"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.default.Schema({
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
userSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const token = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, 'thisismynewcourse');
        user.tokens = user.tokens.concat({ token });
        yield user.save();
        return token;
    });
};
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
exports.User = mongoose_1.default.model('User', userSchema);
// module.exports = User
//# sourceMappingURL=user.js.map