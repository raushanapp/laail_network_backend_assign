import { type } from "os";
import Contracts from "../models/contracts";
import { Request, Response } from "express";

export const createContracts = async (req: Request, res: Response) => {
    try {
        const user = await Contracts.create(req.body);
        res.status(200).json({ sucess: true, user: user })
    } catch (err: any) {
        res.status(500).json({
            sucess: false,
            err: err.message
        })
    }
};

export const getContracts = async (req: Request, res: Response) => {
    
    const { sort }: any = req.query;
    
   
    try {
        const users = await Contracts.find().sort(sort).populate({
            path: "lenderId borrowerId",
            select: {
                name: 1,
                mobileNumber:1,
                principle: 1,
                interest:1,
                loanStartDate: 1,
                loanDueDate: 1,
                isRepaid: 1,
                _id:0

            },
        }).lean().exec();
        res.status(200).json({sucess:true,users:users})
    } catch (err:any) {
        res.status(500).json({
            sucess: false,
            err:err.message 
        })
    }
}