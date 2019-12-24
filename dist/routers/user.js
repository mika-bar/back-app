"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../models/user");
const auth_1 = require("../middleware/auth");
const router = express.Router();
exports.userRouter = router;
//create user(signup)- post
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
//update user- patch
router.patch('/users/me', auth_1.auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const userFields = ['firstName', 'lastName', 'userName', 'password'];
    const isUpdateValid = updates.every((update) => userFields.includes(update));
    if (!isUpdateValid) {
        return res.status(400).send({ error: 'not allowed updates' });
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//delete user- delete 
router.delete('/users/me', auth_1.auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    }
    catch (e) {
        res.status(500).send();
    }
});
//login- post
router.post('/users/login', async (req, res) => {
    try {
        const user = await user_1.User.schema.statics.findByCredentials(req.body.userName, req.body.password);
        console.log(user);
        const token = await user.generateAuthToken();
        console.log(token);
        res.status(200).send({ user, token });
    }
    catch (e) {
        res.status(400).send({ error: e.message });
    }
});
// logout- post
router.post('/users/logout', auth_1.auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    }
    catch (e) {
        res.status(500).send();
    }
});
//# sourceMappingURL=user.js.map