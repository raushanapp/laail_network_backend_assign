import UserModel from "../models/users";
import { Request, Response } from "express";

// create user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(200).json({ sucess: true, user: user })
    } catch (err: any) {
        res.status(500).json({
            sucess: false,
            err: err.message
        })
    }
};

// get all users
export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find().lean().exec();
        res.status(200).json({ sucess: true, users: users })
    } catch (err: any) {
        res.status(500).json({
            sucess: false,
            err: err.message
        })
    }
};

// get by query and lender name
export const getLender = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({typeOfUsers:"lender"}).lean().exec();
        res.status(200).json({ sucess: true, users: users })
    } catch (err: any) {
        res.status(500).json({
            sucess: false,
            err: err.message
        })
    }
};

// get by query and borrower name
export const getBorrower = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({typeOfUsers:"borrower"}).lean().exec();
        res.status(200).json({ sucess: true, users: users })
    } catch (err: any) {
        res.status(500).json({
            sucess: false,
            err: err.message
        })
    }
};