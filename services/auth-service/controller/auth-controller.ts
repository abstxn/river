import { Request, Response } from "express";
import {
  createUser as _createUser,
  getUserByUsername as _getUserByUsername,
  getUserByEmail as _getUserByEmail,
} from "../model/database";
import { UserModelInterface } from "../model/user-model";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, passwordHash } = req.body;

    // Check for existing users associated with username or email
    const usernameExists = Boolean(await _getUserByUsername(username));
    const emailExists = Boolean(await _getUserByEmail(email));
    if (usernameExists || emailExists) {
      res.status(409).json({ message: "Username and/or email already exist." });
      return
    }

    // If no existing users associated with username or email, create new user
    const createdUser = await _createUser(username, email, passwordHash);
    res.status(201).json({
      message: `Created new user ${username} successfully.`,
      data: formatUserDocument(createdUser)
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unhandled error when creating user." });
  }
}

export async function handleLogin(req: Request, res: Response) {
}

export function formatUserDocument(user: UserModelInterface) {
  return {
    id: user.id,
    username: user.username,
    email: user.email
  }
}