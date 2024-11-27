import express, { Request, Response } from "express";
import "dotenv/config";
import { Redis } from "ioredis";

const app = express();
app.use(express.json());

// TODO: Insert application here.
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached confluence-service." })
});

const redisConnDetails = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
}
const redisPub = new Redis(redisConnDetails);
// const redisSub = new Redis(redisConnDetails);

setInterval(() => {
  const streamName = "test-stream";
  redisPub.xadd(streamName, "*", "type", "ping");
  console.log(`Sent a message to ${streamName}`);
}, 1000);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`confluence-service running on port ${PORT}`);
});