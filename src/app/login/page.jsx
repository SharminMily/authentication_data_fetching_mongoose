/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import {signIn} from "next-auth/react";

export default function Login() {
  const router = useRouter();

  const [info, setInfo] = useState({  email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false); 
   
   function handleInput(e){
     setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }
   console.log(info)
 
   async function handleSubmit (e) {
     e.preventDefault(); 
     if(!info.email || !info.password){
       setError("Must provide all the credentials")
     }    
     try {
      setPending(true);
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false
      })
      if(res.error){
        setError("Invalid Credentials.")
        setPending(false);
        return;
      }
      router.replace("/")
    } 
    catch (error) {
       setPending(false)
       setError("Something went wrong")
     }
   }
 
  return (
    <>
      <div className="flex flex-col justify-center p-20">
        <form onSubmit={handleSubmit} className="border border-blue-500 flex flex-col p-10">           
        <div className="py-2">
            <input 
            type="email" 
            name= "email"
            onChange={(e) => handleInput(e)}  
            placeholder="email@gmail.com" 
            className="border-blue-800 border px-4 py-2 w-full rounded-md" id="" />          
          </div>

          <div className="py-2">
            <input 
            type="password"  
            name= "password"
            onChange={(e) => handleInput(e)} 
            placeholder="password"  
            className="border-blue-800 border px-4 py-2 w-full rounded-md"  />            
          </div>
              
              {error && <span className="massage text-red-600">{error}</span>}
        
          <div className="py-2 rounded-md bg-pink-800 text-center">
       

            <button className="primary-btn change-btn text-white" disabled={pending? true: false}>{pending? "logging" : "login"}</button>
            </div>  
         
        <p className="text-center">Don't have an account? <Link href="/register">Register</Link> </p>
        </form>
      </div>
    </>
  );
}

