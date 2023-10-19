import { userModel } from "../../../DB/models/user.model.js";


const homePage = (req, res) => {
    res.render("index.ejs");
  };
  
const users = async (req, res) => {
    let result = await userModel.find();
  
    res.render("users.ejs", { result });
  };
  
const about = async (req, res) => {
    res.render("about.ejs");
  };
  
const addUser = async (req, res) => {
    console.log(req.body);
    let result = new userModel(req.body);
    await result.save();
    res.redirect("/");
  };
  
const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    await userModel.findByIdAndDelete(id);
  
    res.redirect("/users");
  };
  
const getUpdatedUser =  async (req, res) => {
    const { id } = req.params;
  
    let result = await userModel.findById(id);
  
    res.render("updateUser.ejs", { result });
  };
  
const postUpdateUser = async (req, res) => {
    const { id } = req.params;
  
    await userModel.findByIdAndUpdate(id,req.body);
  
    res.redirect("/users");
  };


  export {
    homePage,
    users,
    about,
    addUser,
    deleteUser,
    getUpdatedUser,
    postUpdateUser
  }