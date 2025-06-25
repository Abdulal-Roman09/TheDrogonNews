import React from "react";
import Navber from "../Layouts/Navber";
import { Outlet } from "react-router";
import MainLink from "../Pages/MainLink/MainLink";
import LeftAside from "../Pages/Aside/LeftAside";
import RightAside from "../Pages/Aside/RightAside";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <>
      <Navber></Navber>
      <MainLink></MainLink>
     
        <main className="grid grid-cols-12 text-center">
          {/* LeftAside */}
          <aside className="col-span-3">
            <div className="">
              <LeftAside></LeftAside>
            </div>
          </aside>
          <div className="mainContainer col-span-6">
            <Outlet>
              <Home></Home>
            </Outlet>
          </div>

          <aside className="col-span-3">
            <div className="">
              <RightAside></RightAside>
            </div>
          </aside>
        </main>
      
    </>
  );
};

export default Root;
