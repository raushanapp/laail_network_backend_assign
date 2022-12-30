import express from "express";
import { createContracts, getContracts } from "../controller/contracts.controller";
const contractRouter = express.Router();

// create contracts
contractRouter.post("/create", createContracts)

// get all contract details
contractRouter.get("/",getContracts)


export default contractRouter;