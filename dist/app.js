"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("./db/mongoose");
const user_1 = require("./routers/user");
const githubSearch_1 = require("./routers/githubSearch");
const favourite_1 = require("./routers/favourite");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(user_1.userRouter);
app.use(githubSearch_1.githubSearchRouter);
app.use(favourite_1.favouriteRouter);
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map