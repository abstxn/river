import mongoose from 'mongoose';

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

const UserModel = mongoose.model("UserModel", UserModelSchema);

export default UserModel