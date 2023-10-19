import mongoose from "mongoose";

export const dbConnection = async () => {
  return await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("DB Not connected");
    });
};
