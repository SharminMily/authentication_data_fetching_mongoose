"use client"
import { notFound } from "next/navigation";


async function getData() {
    const res = await fetch("http://localhost:3000/api/usersGet", {cache: "no-store"});

    if(!res.ok) return notFound();
    return res.json()
}

const page = async() => {

    const data = await getData();
    console.log(data);

    return (
        <div>
            <p className="m-10">hello</p>
            {
                data.map((user) => <div key={user.id} className="">
                <div className=""> 
                <p className="text-center text-lg">{user.email}</p>
               <br></br>
                <p className="text-center text-xl">{user.password}</p>
               
                </div>
                </div> )
            }
        </div>
    );
};

export default page;