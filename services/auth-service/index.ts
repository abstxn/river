import express, { Request, Response } from "express";
import dotenv from 'dotenv';

// Import environment variables.
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached auth-service." })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`auth-service running on port ${PORT}`);
});