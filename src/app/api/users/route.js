import { connectMongoDB } from "@/app/utils/dbConnect/dbConnect";
import User from "@/app/utils/schema/userSchema";
import { NextResponse } from "next/server";

// import { connect }  from "@/app/utils/dbConnect/dbConnect";
export async function POST(req) {
    
    try {
        const {name, email, phone} = await req.json()
        await connectMongoDB();

        await User.create( {name, email, phone});

        return NextResponse.json({ message: 'user login ' }, {status: 201})
        
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while login the user"}, {status: 500} 
        )
    }
       
}