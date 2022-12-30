import express from "express";
import { createUser ,getAllUser, getBorrower, getLender} from "../controller/users.controller";

const userRouter = express.Router();
// create  user
userRouter.post("/create", createUser);

// get all  user
userRouter.get("/", getAllUser);

// get lender  user
userRouter.get("/lender", getLender);
// get lender  user
userRouter.get("/borrower", getBorrower);

export default userRouter;