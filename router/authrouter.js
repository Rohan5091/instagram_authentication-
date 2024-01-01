
const express=require("express");
const signup=require("../controler/authcontroler.js");
const authRouter=express.Router();

authRouter.post("/signup",signup);


module.exports=authRouter;