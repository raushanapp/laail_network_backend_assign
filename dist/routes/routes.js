"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contracts_controller_1 = require("../controller/contracts.controller");
const contractRouter = express_1.default.Router();
// create contracts
contractRouter.post("/create", contracts_controller_1.createContracts);
// get all contract details
contractRouter.get("/", contracts_controller_1.getContracts);
exports.default = contractRouter;
