const express = require("express");
const cors = require("cors");
const app = express();
import connectDB from "./config/db";
// database connect


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4600 as number;
app.listen(PORT, async() => {
    console.log(`Server running prot ${PORT}`);
    await connectDB();
})