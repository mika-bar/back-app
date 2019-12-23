"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const user_1 = require("../models/user");
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '');
        console.log(token);
        const decoded = jwt.verify(token, 'backendapp');
        console.log("gfdsssgds");
        console.log(decoded._id);
        const user = await user_1.User.findOne({ _id: decoded._id, 'tokens.token': token });
        // const user = await User.findOne({'tokens.token': token })
        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    }
    catch (e) {
        // res.status(401).send({error: 'not authenticated!'})
        res.status(401).send({ error: e.message });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map