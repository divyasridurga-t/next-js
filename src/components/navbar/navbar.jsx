"use client";
import styles from "../navbar/navbar.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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
let isAdminTrue = true;

export default function Navbar() {
  let [show, setShow] = useState("hide");
  let path = usePathname();
  function handleMenu() {
    setShow(show == "hide" ? "show" : "hide");
  }
  return (
    <>
      <div className="navbar_container">
        <div>
          <Link className="link" href={'/'}>LOGO</Link>
        </div>
        <div>
          <ul className="navbar_ul">
            {menu.map((item, index) => {
              console.log(item.path, path);
              return (
                <li key={index}>
                  <a
                    className={`${item.path == path ? "active" : ""}`}
                    href={item.path}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            {isAdminTrue && <li>Admin</li>}
            {
              <button className="logout">
                {isSessionTrue ? "Logout" : "Login"}
              </button>
            }
          </ul>
          <div className="hamburger_menu">
            <button className="hamburger_btn" onClick={handleMenu}>
              <img width={30} height={25} src="/images/hamburger.png" />
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile_menu_container ${show}`}>
        <ul className="mobile_menu">
          {menu.map((item, index) => {
            return (
              <li className={`${item.path == path ? "active" : ""}`}>
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
          {isAdminTrue && <li>Admin</li>}
          {
            <button className="logout">
              {isSessionTrue ? "Logout" : "Login"}
            </button>
          }
        </ul>
      </div>
    </>
  );
}
