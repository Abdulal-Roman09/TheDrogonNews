import React, { use } from "react";
import { NavLink } from "react-router";
import UserImg from "../../assets/user.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MainLink = () => {
  const hendelLogout=()=>{
    console.log("User tring to logout")
    logOut().then(()=>{
      alert("you logout")
    }).catch(()=>{
      console.log('error')
    })
  }
  const { user,logOut } = use(AuthContext);
  return (
    <div className="container mx-auto ">
      <div className="my-10 flex justify-between items-center">
        <div>{user && user.email}</div>
        <div className="text-accent">
          <ul className="flex  gap-5">
            <li>
              <NavLink
                to={"/category/0"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Career"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <img src={UserImg} alt="" />
          {user ? (
            <NavLink to={"/login"}>
              <button onClick={hendelLogout} className="btn btn-primary px-10"> LogOut</button>
            </NavLink>
          ) : (
            <NavLink to={"/login"}>
              <button className="btn btn-primary px-10"> Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLink;
