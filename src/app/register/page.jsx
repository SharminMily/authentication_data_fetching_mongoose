"use client"
import { useState } from "react";

export default function Register() {
   const [username, setusername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [gender, setGender] = useState("")

  const [info, setInfo] = useState({username: "", email: "email", password: "password"})

  const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault()    
  //   if (!username || !email || !password || !gender) {
  //     setError("All fields are necessary.");
  //     return;
  //   }try {
  //       const respons = await fetch('api/users', {           
  //        method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({username, email, password, gender}),
  //     });
  //       if(respons.ok){
  //         const form = e.target;
  //         form.reset()
  //         // router.push("/");
  //       } else{
  //         console.log("failed")
  //       }    
  //           // router.push('/view-users')        
  //   } catch (error) {
  //       alert( error)
  //   }
  // }

  function handleInput(e){
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventdefult();
      if(!info.username || !info.email || !info.password){
        setError("Must provide all the credentails.")
      }
  }
  console.log({info})



  return (
    <>
      <div className="flex justify-center p-10">
        <form onSubmit={handleSubmit} className="border border-blue-500 flex flex-col p-10">          
          <div className="py-2 ">
            <input type="text" 
            name= "username"
            onChange={(e) => handleInput(e)} 
            required 
            className="border-blue-800 border px-4 py-2 rounded-md"  placeholder="userusername" id="" />
          </div>

          <div className="py-2">
            <input type="email" name= "email"
            onChange={(e) => handleInput(e)}  
            placeholder="email@gmail.com" className="border-blue-800 border px-4 py-2 rounded-md" id="" />
          </div>

          <div className="py-2">
            <input type="password"  
            name= "password"
            onChange={(e) => handleInput(e)} className="border-blue-800 border px-4 py-2 rounded-md" placeholder="password"   />
          </div>

        
          <div className="py-2 rounded-md bg-pink-800 text-center">
            <input type="submit" value="Register" className="text-white" />
            </div>     
         
        </form>
      </div>
    </>
  );
}
