
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       lowercase:true
    },
    userName:{
      type:String,
      required:true,
      lowercase:true,
      unique:true
    },
    email:{
      type:String,
      unique:true,
      lowercase:true,
      required:true
    },
    bio:{
      type:String,
      required:true,
      lowercase:true
    },
    forgotPasswordToken:{
      type:String
    },
    forgotPasswordExpiryDate:{
      type:String
    }
  },
  {timestamps:true}
  );


const User=mongoose.model("User",userSchema);

module.exports=User;
