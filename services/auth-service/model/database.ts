import UserModel from "./user-model";
import 'dotenv/config';
import { connect } from "mongoose";

export async function connectToDB() {
  const DB_URI = process.env.DB_URI;

  if (!DB_URI) {
    throw new Error("DB_URI environment variable is not defined.");
  }

  await connect(DB_URI);
}

export async function createUser(
  username: String,
  email: String,
  passwordHash: String) {
  return new UserModel({ username, email, passwordHash }).save();
}