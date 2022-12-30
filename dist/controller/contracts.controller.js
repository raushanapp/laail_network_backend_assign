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
exports.getContracts = exports.createContracts = void 0;
const contracts_1 = __importDefault(require("../models/contracts"));
const createContracts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield contracts_1.default.create(req.body);
        res.status(200).json({ sucess: true, user: user });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.createContracts = createContracts;
const getContracts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sort } = req.query;
    try {
        const users = yield contracts_1.default.find().sort(sort).populate({
            path: "lenderId borrowerId",
            select: {
                name: 1,
                mobileNumber: 1,
                principle: 1,
                interest: 1,
                loanStartDate: 1,
                loanDueDate: 1,
                isRepaid: 1,
                _id: 0
            },
        }).lean().exec();
        res.status(200).json({ sucess: true, users: users });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            err: err.message
        });
    }
});
exports.getContracts = getContracts;
