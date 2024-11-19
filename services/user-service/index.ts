import express, { Request, Response } from "express";
import userRoutes from './routes/user-routes';
import dotenv from 'dotenv';

// Import environment variables.
dotenv.config();

const app = express();
app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached user-service." })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`user-service running on port ${PORT}`);
});