import express, { Request, Response } from "express";
import "dotenv/config"
import { createUser, handleLogin } from "./controller/auth-controller";
import { connectToDB } from "./model/database";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached auth-service." })
});

// TODO: Implement login route
app.post('/login', (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /login" });
});

app.post('/sign-up', createUser);

const PORT = process.env.PORT;
connectToDB().then(() => {
    console.log("Connected to DB!");
    app.listen(PORT, () => {
        console.log(`auth-service running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to DB: ", error);
})