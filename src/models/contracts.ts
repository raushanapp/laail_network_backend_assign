import mongoose, { Schema } from "mongoose";
export interface IContract{
    lenderId: Schema.Types.ObjectId;
    borrowerId: Schema.Types.ObjectId;
    principle: number;
    interest: number;
    loanStartDate?: string;
    loanDueDate: string;
    isRepaid:string
}
const contractSchema = new mongoose.Schema<IContract>({
    lenderId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    borrowerId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    principle: {
        type: Number, required: true
    },
    interest: {
        type: Number, required: true
    },
    loanStartDate: {
        type:  String, required: true
    },
    loanDueDate: {
        type: String, required: true
    },
    isRepaid: {
        type: String, required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const Contracts = mongoose.model<IContract>("contract", contractSchema);
export default Contracts;