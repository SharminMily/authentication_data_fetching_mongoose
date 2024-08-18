import mongoose from "mongoose"
import {models, Schema} from "mongoose"

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:  [true, "Must provide a username."],
        unique: [true, "Must be Unique"],
    },
    email:{
        type: String,
        required:  [true, "Must provide a email."],
        unique: [true, "Must be Unique"],
    },
    password:{
        type: String,
        required:  [true, "Must provide a password."],
        unique: [true, "Must be Unique"],
    },    
},
{
   timestamps: true
});

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;