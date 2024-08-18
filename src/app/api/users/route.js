import { connectMongoDB } from "@/app/utils/dbConnect/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import User from "@/app/utils/schema/userSchema";

export async function POST(req) {
    try {
        await connectMongoDB();
         const {username, email, password} = await req.json();
         const exists = await User.findOne({$or: [{email}, {username}]})
         if(exists){
            return NextResponse.json({message: "Username or email already exists."}, {status: 500})
         }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, email, password:hashedPassword })
        return NextResponse.json({ message:"User registered." }, {status:201});
        // console.log({username, email, password});
    } catch (error) {
        console.log("Error while registering user.", error);
        return NextResponse.json({message: "Error occured while registered"}, {status: 500})
    }
}