import Image from "next/image";

const page = () => {
    
    return (
        <div className="text-center">
           Blog

           <div className="flex flex-wrap justify-center gap-4 my-10">
           <Image
          src="https://images.unsplash.com/photo-1722345901893-0c12056b464e?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Image"         
          height={100}
          width={300}
          className="rounded-md"
          />
           <Image
          src="https://images.unsplash.com/photo-1722111059641-be1189421e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTh8fHxlbnwwfHx8fHw%3D"
          alt="About Image"         
          height={100}
          width={300}
          className="rounded-md"
          />
           <Image
          src="https://images.unsplash.com/photo-1722343766561-0d7a6f2f7e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOTB8fHxlbnwwfHx8fHw%3D"
          alt="About Image"         
          height={100}
          width={300}
          className="rounded-md"
          />
           </div>
        </div>
    );
};

export default page;