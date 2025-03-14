import mongoose, { model, Mongoose, Schema} from "mongoose";
import { string } from "zod";


 mongoose.connect("mongodb+srv://bansiwal1122:lordofmahesh@brain.eybnu.mongodb.net/brain")
 


const userSchema = new Schema ({
    username: {
        type : String,
        unique: true
    },
    password : String
})
export const userModel = model('User',userSchema)

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type:mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    type: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true
    }})
export const ContentModel = model("Content", ContentSchema)