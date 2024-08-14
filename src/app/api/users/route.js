import { connectMongoDB } from "@/app/utils/dbConnect/dbConnect";
import User from "@/app/utils/schema/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// import { connect }  from "@/app/utils/dbConnect/dbConnect";
export async function POST(req) {
    
    try {
        await connectMongoDB();
        const {username, email,  password} = await req.json()
        const exists = await User.findOne({$or: [{ email }, { username }]});
        
        if(exists){
            return NextResponse.json({ message: 'user register ' }, {status: 201})
        }
        const hashedPassword = await bcrypt.hash(password, 10) 

        await User.create({ username, email, password, hashedPassword });
        return NextResponse.json({ message: 'user register' }, {status: 201})       
        
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while login the user"}, {status: 500} 
        )
    }
       
}