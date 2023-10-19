import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnection } from "./DB/dbConnection.js";
import { bootstrap } from "./src/bootstrap.js";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

bootstrap(app);

dbConnection();
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
