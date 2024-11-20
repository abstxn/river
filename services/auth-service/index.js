"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const controller_1 = require("./controller");
// Import environment variables.
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json({ message: "You have reached auth-service." });
});
// TODO:
// 1. Route for sign up (username, email, password) ==> {save; return authorized:bool;}
// 2. Route for login (username|email, password) ==> {check; return authorized:bool;}
app.post('/login', (req, res) => {
    res.status(200).json({ message: "POST /login" });
});
app.post('/sign-up', controller_1.createUser);
// TODO:
// 1. Setup MongoDB for user authentication details (username, email, password)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`auth-service running on port ${PORT}`);
});
