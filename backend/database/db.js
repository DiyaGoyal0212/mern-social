import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/social");

    console.log("Connected To MongoDb");
  } catch (error) {
    console.log(error);
  }
};
