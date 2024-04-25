import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("Missing Mongodb url");
  if (isConnected) return console.log("DB is connected successfully");
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Dev overflow",
    });
    isConnected = true;
    console.log("DB Connected is connected successfully");
  } catch (err: any) {
    return console.log("Unexpected error ", err);
  }
};
