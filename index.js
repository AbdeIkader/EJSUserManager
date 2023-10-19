import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import path from "path";
import { dbConnection } from "./DB/dbConnection.js";
import { userModel } from "./DB/models/user.model.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/users", async (req, res) => {
  let result = await userModel.find();

  res.render("users.ejs", { result });
});

app.get("/about", async (req, res) => {
  res.render("about.ejs");
});

app.post("/addUser", async (req, res) => {
  console.log(req.body);
  let result = new userModel(req.body);
  await result.save();
  res.redirect("/");
});

dbConnection();
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
