const express=require("express")
const authRouter=require("./router/authRouter")
const app=express();

app.use(express.json())
app.use("/api/auth/",authRouter)
app.use("/",(req,res)=>{
      res.statusCode=200
      res.json({
        success:true ,
        message:"home Page"
      })    
})
module.exports=app;