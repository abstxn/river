import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { createUser, handleLogin } from "./controller";

// Import environment variables.
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached auth-service." })
});

// TODO:
// 1. Route for sign up (username, email, password) ==> {save; return authorized:bool;}
// 2. Route for login (username|email, password) ==> {check; return authorized:bool;}

app.post('/login', (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /login" });
});

app.post('/sign-up', createUser);

// TODO:
// 1. Setup MongoDB for user authentication details (username, email, password)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`auth-service running on port ${PORT}`);
});