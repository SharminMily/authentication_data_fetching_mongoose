"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false); 

  // const handleSubmit = async (e) => {
  //   e.preventDefault()    
  //   if (!username || !email || !password || !gender) {
  //     setError("All fields are necessary.");
     
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
  console.log(info)

  async function handleSubmit (e) {
    e.preventDefault(); 
    if(!info.username || !info.email || !info.password){
      setError("Must provide all the credentials")
    }
    try {
      setPending(true);
      const res = await fetch("api/users", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(info)        
      })
      if(res.ok){
        setPending(false);
        const form = e.target;
        form.reset();
        router.push("/login")
        console.log("user registred")
      } else{
        const errorData = await res.json() 
        console.log(errorData.message);
        setPending(false)
      }
    } catch (error) {
      setPending(false)
      setError("Something went wrong")
    }
  }
  

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
              
              {error && <span className="massage text-red-600">{error}</span>}
        
          <div className="py-2 rounded-md bg-pink-800 text-center">
            {/* <input type="submit" value="Register" className="text-white" /> */}
            <button className="primary-btn change-btn text-white" disabled={pending? true: false}>{pending? "Registering" : "Register"}</button>
            </div>  
{/*          
        <p className="text-center">Don't have an account? <Link href="/register">Register</Link> </p>
            </div>      */}
         
        </form>
      </div>
    </>
  );
}
