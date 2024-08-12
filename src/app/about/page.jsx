"use clint"
import Image from "next/image";
import Posts from "../components/posts/Posts";

const page = () => {
    return (
        <div className="text-center">
           <h1 className="text-2xl font-bold">ABOUT</h1>
           <div className="flex justify-center">     
           </div>

           <div className="">
            <Posts></Posts>
           </div>

        </div>
    );
};

export default page;