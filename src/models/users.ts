import mongoose from 'mongoose';
interface IUser{
    name: string,
    mobileNumber: number,
    typeOfUsers:string
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: true, min: 10 },
    typeOfUsers: { type: String, enum: ["lender", "borrower"], required: true }
}, {
    timestamps: true,
    versionKey: false
});

const UserModel = mongoose.model<IUser>("user", userSchema);