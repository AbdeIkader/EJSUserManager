import { userModel } from "../../../DB/models/user.model.js";
import { catchAsyncError } from "./../../utils/catchAsyncError.js";
import { AppError } from "./../../utils/AppError.js";

const homePage = catchAsyncError((req, res) => {
  res.render("index.ejs");
});

const users = catchAsyncError(async (req, res) => {
  let result = await userModel.find();

  res.render("users.ejs", { result });
});

const about = catchAsyncError(async (req, res) => {
  res.render("about.ejs");
});

const addUser = catchAsyncError(async (req, res,next) => {
  const { email } = req.body;
  let isExist = await userModel.findOne({ email });
  if (isExist) {
    next(new AppError("User is already exist in the system"));
  } else {
    let result = new userModel(req.body);
    await result.save();
    res.redirect("/");
  }
});

const deleteUser = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  await userModel.findByIdAndDelete(id);

  res.redirect("/users");
});

const getUpdatedUser = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  let result = await userModel.findById(id);

  res.render("updateUser.ejs", { result });
});

const postUpdateUser = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  await userModel.findByIdAndUpdate(id, req.body);

  res.redirect("/users");
});

export {
  homePage,
  users,
  about,
  addUser,
  deleteUser,
  getUpdatedUser,
  postUpdateUser,
};
