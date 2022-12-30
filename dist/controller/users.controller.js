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
exports.getBorrower = exports.getLender = exports.getAllUser = exports.createUser = void 0;
const users_1 = __importDefault(require("../models/users"));
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.create(req.body);
        res.status(200).json({ sucess: true, user: user });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.createUser = createUser;
// get all users
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find().lean().exec();
        res.status(200).json({ sucess: true, users: users });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.getAllUser = getAllUser;
// get by query and lender name
const getLender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find({ typeOfUsers: "lender" }).lean().exec();
        res.status(200).json({ sucess: true, users: users });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.getLender = getLender;
// get by query and borrower name
const getBorrower = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find({ typeOfUsers: "borrower" }).lean().exec();
        res.status(200).json({ sucess: true, users: users });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.getBorrower = getBorrower;
