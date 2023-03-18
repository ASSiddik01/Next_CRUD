import { Schema, model, models } from "mongoose";

// Schema Design
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      minLength: [3, "Name must be at least 3 charcters"],
      maxLength: [100, "Name is too large"],
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
    },
    salary: {
      type: Number,
    },
    date: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Model Create
const User = models.users || model("users", userSchema);
export default User;
