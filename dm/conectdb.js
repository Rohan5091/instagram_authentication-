

const mongoose=require("mongoose");

 async function  dbConnection() {
   
      await mongoose
      .connect(process.env.MONGOOSE_URL)
      .then((con)=>{
          console.log("DB is connected to this host",con.connection.host);
      })
      .catch((err)=>{
        console.log("Not coneected to DB ",err.message);
        })
}

module.exports=dbConnection;