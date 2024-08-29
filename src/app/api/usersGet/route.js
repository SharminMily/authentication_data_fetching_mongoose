import { connectMongoDB } from "@/app/utils/dbConnect/dbConnect";
import User from "@/app/utils/schema/userSchema";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connectMongoDB();

        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (error) {
        return new NextResponse("error is fatching users " + error, {status: 500})
    }
}





