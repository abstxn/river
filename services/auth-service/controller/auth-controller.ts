import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import {
  createUser as _createUser,
  getUserByUsername as _getUserByUsername,
  getUserByEmail as _getUserByEmail,
} from "../model/database";
import { UserModelInterface } from "../model/user-model";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;

    // Check for existing users associated with username or email
    const usernameExists = Boolean(await _getUserByUsername(username));
    const emailExists = Boolean(await _getUserByEmail(email));
    if (usernameExists || emailExists) {
      res.status(409).json({ message: "Username and/or email already exist." });
      return
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

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
  try {
    const { username, password } = req.body;

    // Check if passwordHash matches actual username's passwordHash
    const claimedUser = await _getUserByUsername(username);
    if (!claimedUser) {
      res.status(401).json({ message: "User with username does not exist." });
      return
    }

    // Check if the password provided is correct
    const isValidPassword = bcrypt.compareSync(password, claimedUser.passwordHash);
    if (!isValidPassword) {
      res.status(401).json({ message: "Incorrect password." });
      return
    }

    // If user exists and password matches, return ok
    res.status(200).json({
      message: "Successfully logged in.",
      data: formatUserDocument(claimedUser)
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unhandled error when creating user." });
  }
}

export function formatUserDocument(user: UserModelInterface) {
  return {
    id: user.id,
    username: user.username,
    email: user.email
  }
}