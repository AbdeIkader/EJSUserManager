import mongoose from "mongoose";

export const dbConnection = async () => {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/EJSProj")
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("DB Not connected");
    });
};
