import { Request, Response } from "express";
import { createUser as _createUser } from "../model/database";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, passwordHash } = req.body;

    // TODO: Check if existing user with username or email exists
    // TODO: Create a new user in the database

    // console.log("Received: ", username, email, passwordHash);
    // res.status(200).json({ message: "Successfully received create user request" });

    const createdUser = await _createUser(username, email, passwordHash);
    res.status(201).json({message: `Created new user ${username} successfully.`})

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unhandled error when creating user." });
  }
}

export async function handleLogin(req: Request, res: Response) {
}