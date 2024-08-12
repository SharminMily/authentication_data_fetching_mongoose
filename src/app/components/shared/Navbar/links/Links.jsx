"use client"
import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./navLink/navLink.module.css"

const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

const Links = () => {  

  const [open, setOpen] = useState(false);
//  Temporary
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}> 
    <div className="md:flex justify-center hidden  gap-6 ">
      {links.map((link) => (
        <NavLink item={link} key={link.title}></NavLink>
      ))}
      {/* {session ? (
        <>
          {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
          )
        }
        <button className="logout">LogOut</button>                    
        </>
      ) : (
        <>
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        </>
      )} */}
    </div>

  <div className="md:hidden block ">
  <button className={styles.menuButton} onClick={() => setOpen((prev) => (!prev))}>Manu</button>

{
  open && (
    <div className={styles.mobileLinks}>
      <div className="flex flex-col justify-center gap-6 bg-blue-800 text-white ">
     {links.map((link) => (
    <NavLink item={link} key={link.title}></NavLink>
  ))}
   </div>
  </div>
  )
}
    </div>
    </div>
  );
};

export default Links;
