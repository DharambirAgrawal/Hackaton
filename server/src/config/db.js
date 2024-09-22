import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED");
  } catch (err) {
    // console.log(`Error: ${conn.connection.host}`);
    console.log(err)
    process.exit(1);
  }
};