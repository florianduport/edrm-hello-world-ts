import { Schema, model } from "mongoose";

interface IUser {
  name: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    default: "New recruit",
  },
});

const User = model<IUser>("UserHelloWorld", userSchema, 'users');

export default User;
