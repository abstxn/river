import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

// TODO: Insert application here.
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached example-service." })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`example-service running on port ${PORT}`);
});