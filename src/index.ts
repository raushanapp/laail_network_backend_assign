const express = require("express");
const cors = require("cors");
const app = express();
import connectDB from "./config/db";
import contractRouter from "./routes/routes";
import userRouter from "./routes/user.routes";
// database connect


app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/contract", contractRouter);

const PORT = process.env.PORT || 4600 as number;
app.listen(PORT, async() => {
    console.log(`Server running prot ${PORT}`);
    await connectDB();
})