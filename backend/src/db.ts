import mongoose, { model, Mongoose, Schema} from "mongoose";


 mongoose.connect("mongodb://localhost:27017/codespase")
 


const userSchema = new Schema ({
    userName: String,
    password : String
})

export const userModel = model('user',userSchema)
