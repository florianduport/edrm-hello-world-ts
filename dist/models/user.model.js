"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "New recruit",
    },
});
const User = (0, mongoose_1.model)("UserHelloWorld", userSchema, 'users');
exports.default = User;
