import { connectMongoDB } from "@/app/utils/dbConnect/dbConnect";
import User from "@/app/utils/schema/userSchema";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
    try {
        connectMongoDB();
        const user = await User.findOne({email:credentials.email});
        if(!user) throw new Error("Wrong Credentials.")
            const isCorrect = await bcrypt.compare(credentials.password,user.password)
        if(!isCorrect) throw new Error("wrong while loggin in")
            return user;
    } catch (error) {
        console.log("error while loggin")
        throw new Error("Something went Wrong")
    }
}

export const authOptions = {
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    return user;

                    // console.log({credentials});
                } catch (error) {
                    throw new Error("Failed to login")
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if (user){
                token.username = user.username;
                token.email = user.email;
                token.id = user.id;
            }
            console.log("this is the = ", token)
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            console.log("this is the  session = ", session)
            return session
        },
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};