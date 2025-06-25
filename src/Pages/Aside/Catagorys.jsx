import React, { use } from "react";
import { NavLink } from 'react-router';
const catagoryPromiss = fetch("/categories.json").then((res) => res.json());

const Catagorys = () => {
  const catagorya = use(catagoryPromiss);
  
  return (
    <div>
      <h1 className="text-2xl font-semibold">All Catagorys({catagorya.length})</h1>
      <div className="space-y-4  mt-5 flex items-center flex-col justify-center mx-auto">
        {catagorya.map((singleCatagory) => (

          
          <NavLink key={singleCatagory.id}
         to={`/category/${singleCatagory.id}`} 
         className={`btn  bg-base-100 border-0 hover:bg-base-300 px-10`}>
            {singleCatagory.name}
            </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagorys;
