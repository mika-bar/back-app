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
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
// const router = new express.Router() 
// check bug: won't approve the "new" keyword!!
const router = express_1.default.Router();
exports.userRouter = router;
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.User(req.body);
    try {
        yield user.save();
        // const token = await user.generateAuthToken()
        // res.status(201).send({ user, token })
        res.status(201).send({ user });
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
//# sourceMappingURL=user.js.map