import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, passwordHash } = req.body;

    // TODO:
    // 1. Check if existing user with username or email exists
    // 2. If exists, return appropriate response
    // 3. Else, create a new user in the database
    console.log("Received: ", username, email, passwordHash);
    res.status(200).json({ message: "Successfully received create user request" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unhandled error when creating user." });
  }
}

export async function handleLogin(req: Request, res: Response) {
}