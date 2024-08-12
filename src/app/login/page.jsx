"use client"
import { useState } from "react";
export default function Login() {
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [gender, setGender] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()    
    if (!name || !email || !password || !gender) {
      setError("All fields are necessary.");
      return;
    }try {
        const respons = await fetch('api/users', {           
         method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, gender}),
      });
        if(respons.ok){
          const form = e.target;
          form.reset()
          // router.push("/");
        } else{
          console.log("failed")
        }    
            // router.push('/view-users')        
    } catch (error) {
        alert( error)
    }
  }
  return (
    <>
      <div className="flex justify-center p-10">
        <form onSubmit={handleSubmit} className="border border-blue-500 flex flex-col p-10">          
          <div className="py-2 ">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border-blue-800 border px-4 py-2 rounded-md" name="" placeholder="Name" id="" />
          </div>

          <div className="py-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  name="" placeholder="Email" className="border-blue-800 border px-4 py-2 rounded-md" id="" />
          </div>

          <div className="">
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required  className="border-blue-800 border px-4 py-2 rounded-md" placeholder="password"  name="" id="" />
          </div>

        
          <div className="py-2 rounded-md bg-green-600 text-center">
            <input type="submit" value="save user" className="text-white" />
            </div>     
         
        </form>
      </div>
    </>
  );
}

