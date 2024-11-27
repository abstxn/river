import express, { Request, Response } from "express";
import "dotenv/config";
import { Redis } from "ioredis";

const app = express();
app.use(express.json());

// TODO: Insert application here.
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "You have reached distributary-service." })
});

const redisConnDetails = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
}
// const redisPub = new Redis(redisConnDetails);
const redisSub = new Redis(redisConnDetails);

type redisStreamMessage = [id: string, fields: string[]];
const processMessage = (message: redisStreamMessage) => {
  console.log("Recieved message <-- Id: %s. Data: %O", message[0], message[1]);
};

async function listenForMessage(lastId: string = "$") {
  // `results` is an array, each element of which corresponds to a key.
  // Because we only listen to one key (mystream) here, `results` only contains
  // a single element. See more: https://redis.io/commands/xread#return-value
  const results = await redisSub.xread("BLOCK", 0, "STREAMS", "test-stream", lastId);
  if (!results || results.length === 0) return;
  const [key, messages] = results[0]; // `key` equals to "user-stream"

  messages.forEach(processMessage);

  // Pass the last id of the results to the next round.
  await listenForMessage(messages[messages.length - 1][0]);
}

listenForMessage();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`distributary-service running on port ${PORT}`);
});