"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', true);
function connectDB() {
    const dbUrl = process.env.DATABASE;
    return mongoose_1.default.connect(dbUrl, {
    // useNewUrlParser: true,
    // useUniFiedTopology: true as boolean
    }).then(() => console.info("database connected"))
        .catch((err) => {
        console.error("db error", { err: err.message });
        process.exit(1);
    });
}
;
exports.default = connectDB;
