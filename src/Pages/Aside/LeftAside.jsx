import React, { Suspense } from "react";
import Catagorys from "./Catagorys";

const LeftAside = () => {
  return (
    <div className=" ">
      <Suspense fallback={<span className="loading loading-infinity loading-xl text-9xl"></span>}>
        <Catagorys></Catagorys>
      </Suspense>
    </div>
  );
};

export default LeftAside;
