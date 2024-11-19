import express, { Request, Response } from "express";
import userRoutes from './routes/user-routes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached user-service." })
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`user-service running on port ${PORT}`);
});