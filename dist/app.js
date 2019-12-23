"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("./db/mongoose");
const user_1 = require("./routers/user");
const app = express();
const port = 3000;
app.use(express.json());
app.use(user_1.userRouter);
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map