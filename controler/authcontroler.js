
const User=require("../dm/model")
const emailValidtor=require("email-validator")

async function signup(req,res) {
   const {name,userName,email,bio} =req.body;
   console.log(req.body);

   if (!name || !email || !userName) {
      return res.status(400)
       .json=({
         success:false,
         message:"Every Field is required "
       })
   }
   
  const validate= emailValidtor.validate(email)

  if (!validate) {
   return res.status(500)
    .json=({
      success:false,
      message:"Incorrect Email id"
    })
  }
  
 
   try {
    const UserModel=User(req.body)
    const result= await UserModel.save()
   
         return res.status(200)
          .json({
        success:true,
        message:"Data sucessfully save to DB" ,
        data:result
          })
   } catch (error) {
    return res.status(400)
    .json({
  success:false,
  message:"Data not save to DB" ,
  data:error.message
    })
   }
    
  }
module.exports=signup;