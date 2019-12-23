"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../models/user");
const auth_1 = require("../middleware/auth");
const router = express.Router();
exports.userRouter = router;
//create user- post
router.post('/users', async (req, res) => {
    const user = new user_1.User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//read user- get 
router.get('/users/me', auth_1.auth, async (req, res) => { res.send(req.user); });
//# sourceMappingURL=user.js.map