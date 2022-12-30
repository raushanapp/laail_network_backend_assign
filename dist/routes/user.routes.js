"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controller/users.controller");
const userRouter = express_1.default.Router();
// create  user
userRouter.post("/create", users_controller_1.createUser);
// get all  user
userRouter.get("/", users_controller_1.getAllUser);
// get lender  user
userRouter.get("/lender", users_controller_1.getLender);
// get lender  user
userRouter.get("/borrower", users_controller_1.getBorrower);
exports.default = userRouter;
