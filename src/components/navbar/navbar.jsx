"use client";

import Link from "next/link";
import styles from "../navbar/navbar.module.css";
import { usePathname } from "next/navigation";

let menu = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

let isSessionTrue = true;
let isAdminTrue = false;

export default function Navbar() {
  let path = usePathname();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.container}>     
          <div className={styles.menu}>
            {menu?.map((item, index) => {
              return (
                <Link
                  className={`${path == item.path ? styles.active : ""}`}
                  key={"menu_" + index}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
            {isSessionTrue ? (
              <>
                {isAdminTrue && <Link href={"/admin"}>Admin</Link>}
                <button className={styles.logoutBtn}>Logout</button>
              </>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
        </div>
       
            <button>
                Menu
            </button>
        
      </div>
    </>
  );
}
