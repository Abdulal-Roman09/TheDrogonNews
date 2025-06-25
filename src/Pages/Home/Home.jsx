import React from "react";
import MainLink from "../MainLink/MainLink";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <>
     
     <Navigate to={"/category"}/>
    </>
  );
};

export default Home;
