 require("dotenv").config()
 const dbConnection=require("./dm/conectdb")
 const app=require("./app")

 app.listen(process.env.PORT,()=>{
  console.log("server is running at port ", process.env.PORT);  
})

 dbConnection();
