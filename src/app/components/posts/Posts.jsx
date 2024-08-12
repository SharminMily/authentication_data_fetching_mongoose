/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Posts = () => {
  const [users, setUSers] = useState([]);
  console.log(users);
  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch("https://dummyjson.com/users");

      setUSers(await data.json());
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="my-6 text-2xl font-semibold text-blue-500">ALL USer</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 p-4 ">
        {users &&
          users.users &&
          users.users.map((user) => (
            <div key={user.id} className="">
              <div className="border-2 py-3 border-blue-300 shadow-lg shadow-slate-600 rounded-lg">
              <div className="flex justify-center">
               <Image src={user.image} height={100} width={100}></Image>
               </div>
                <h1>{user.firstName}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.age}</p>
              
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
