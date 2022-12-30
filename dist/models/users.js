"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: true, min: 10 },
    typeOfUsers: { type: String, enum: ["lender", "borrower"], required: true }
}, {
    timestamps: true,
    versionKey: false
});
const UserModel = mongoose_1.default.model("user", userSchema);
exports.default = UserModel;
