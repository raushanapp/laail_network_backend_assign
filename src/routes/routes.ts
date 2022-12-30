import express from "express";
import { createContracts } from "../controller/contracts.controller";
const contractRouter = express.Router();

// create contracts
contractRouter.post("/contract",createContracts)


export default contractRouter;