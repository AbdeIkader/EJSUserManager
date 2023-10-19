import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnection } from "./DB/dbConnection.js";
import userRouter from "./src/modules/User/user.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(userRouter)

dbConnection();
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
