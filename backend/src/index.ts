import express from "express";


import { userModel } from "./db";
import { userinput } from "./validate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


 
const app = express();
app.use(express.json());

app.post("/api/v1/signup",async (req,res)=>{
    try{
        userinput.parse(req.body);
    }catch(e){
        res.status(400).json({
            msg : "invalid input"
        })
        return;
    }

   const username = req.body.username;
   const password = req.body.password;

try{
    const hashedpassword = await bcrypt.hash(password,10);
   await userModel.create({
    username,
    password: hashedpassword
   })
res.json({
    msg : "user is created "
})}catch(e){
    res.status(411).json({
        msg:"somthing is wrong in database"
    })
        }
} 
)

// signin api 
app.post("/api/v1/signin", async (req,res) => {
    try{
        userinput.parse(req.body);
    }catch(e){
        res.status(400).json({
            msg: "wrong input"
        })
        return;
    }
    const username = req.body.username;
    const password = req.body.password;
    

  
    
    const user = await userModel.findOne({ username });

    if (user && user.password) {
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, "secretkey");
            res.json({
                token
            });
        } else {
            res.status(401).json({ message: "Invalid password" });
        }
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

// add a new content 
app.post("/api/v1/content", async (req,res) =>{
    const { title, link, tags, type} = req.body;
})

app.listen(3000, () => {
    console.log(`Server running at http://localhost`);
  });
  