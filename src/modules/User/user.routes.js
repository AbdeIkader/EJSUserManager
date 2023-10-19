import express from "express";

const userRouter = express.Router();

import * as user from "./user.contoller.js";

userRouter.get("/", user.homePage);
userRouter.get("/users", user.users);
userRouter.get("/about", user.about);
userRouter.post("/addUser", user.addUser);
userRouter.post("/deleteUser/:id", user.deleteUser);
userRouter.get("/updateUser/:id", user.getUpdatedUser);
userRouter.post("/updateUser/:id", user.postUpdateUser);


export default userRouter