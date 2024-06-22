import React from "react";

const Items = ({name, desc, image}) => {
  return (
    <div className="min-w[180px] mt-3 p-6 hover:bg-slate-500">
      <div className="font-bold py-5">{name}</div>
      <img src={image} alt="" className=""/>
      <p>{desc}</p>
    </div>
  );
};
export default Items;
