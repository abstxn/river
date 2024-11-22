import mongoose, { Document } from 'mongoose';

const UserModelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  }
})

export interface UserModelInterface extends Document {
  username: string;
  email: string;
  passwordHash: string;
}

const UserModel = mongoose.model<UserModelInterface>("UserModel", UserModelSchema);

export default UserModel