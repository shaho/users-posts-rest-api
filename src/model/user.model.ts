import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UerDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createAt: Date;
  updatedAt: Date;
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema);

export default User;
