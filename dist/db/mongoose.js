"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://127.0.0.1/backend-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
//# sourceMappingURL=mongoose.js.map