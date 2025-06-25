import React from "react";
import { createBrowserRouter } from "react-router";

import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Catagorys from "../Pages/Aside/Catagorys";
import CatagoryNews from "../Pages/Aside/CatagoryNews";
import LoginPage from "../Pages/LoginPages/Login";
import RegisterPage from "../Pages/LoginPages/RegisterPage";
import ReadMore from "../ReadMore/ReadMore";
import PrivateRouts from "../AuthProvider/PrivateRouts";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    children: [
      {
        index: true,
        path: "/category",
        Component: Home,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CatagoryNews,
      },
      
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path:"/readmore/:id",
    loader:()=>fetch("/news.json"),
    element:<PrivateRouts>
      <ReadMore></ReadMore>
    </PrivateRouts>,
  },

]);
