import mongoose from "mongoose";

const user_model = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: false,
  },
});

export const User = mongoose.model("fake-user", user_model);
