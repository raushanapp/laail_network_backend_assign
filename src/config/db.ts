import  mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config() as string;
mongoose.set('strictQuery', true)
function connectDB (){
    const dbUrl = process.env.DATABASE as string;
    return mongoose.connect(dbUrl, {
        // useNewUrlParser: true,
        // useUniFiedTopology: true as boolean
    }).then(() => console.info("database connected"))
        .catch((err: any) => {
            console.error("db error", { err: err.message });
            process.exit(1);
        })
};

export default connectDB ;