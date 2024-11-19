import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('You have reached user-service.');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`user-service running on port ${PORT}`);
});