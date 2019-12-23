"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/backend-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
//# sourceMappingURL=mongoose.js.map