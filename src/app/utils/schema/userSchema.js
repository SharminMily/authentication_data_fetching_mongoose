import mongoose, { models, Schema } from "mongoose"

const userSchema = new Schema({
     username: {
        type: String,
        required: [true, "Must provide a UserName."],
        unique: [true, "Must be unique."],
    },
    email: {
        type: String,
        required: [true, "Must provide a Email."],
        unique: [true, "Must be unique."],
    },
    password: {
        type: String,
        required: true,
        unique: [true, "Must provide a Password."],
    },
    
},
{
  timestamps: true
}
)

const User = models.users || mongoose.model('user', userSchema)

export default User;