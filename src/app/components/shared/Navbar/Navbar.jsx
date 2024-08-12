import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="flex justify-between gap-6  my-6 px-10">
            <Link href="/" className="font-bold text-pink-600 text-2xl font-serif">Logo</Link>        
           <Links></Links>
        </div>
    );
};

export default Navbar;