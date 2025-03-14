import express from "express";

import { Request,Response } from "express";
import { userModel } from "./db";

 
const app = express();
app.use(express.json());
app.post("/api/v1/signup",async (req:Request,res: Response)=>{
   const userName = req.body.userName;
   const password = req.body.password;
try{
   await userModel.create({
    userName,
    password
   })
res.json({
    msg : "user is created "
})}catch{
    res.json({
        msg:"somthing is wrong in database"
    })
}


    
})
app.listen(3000, () => {
    console.log(`Server running at http://localhost`);
  });
  