import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Items = ({ name, desc, image, id}) => {
  const [show, setShow] = useState(false)
  
  const onClick = ()=>{
    setShow((show) =>!show)
  }
  console.log(id, "here is the id")

  return (
    <div onClick={(()=>(`navigate(/album/${id})`))} className="group w-96 flex flex-col gap-5 p-6 hover:bg-slate-500/50 transition-all">
      <h1 className="font-bold text-center text-xl lg:text-3xl group-hover:text-xl lg:group-hover:text-4xl transition-all lg:mb-3 tracking-wide">
        {name}
      </h1>

      <NavLink to={`/album/${id}`}>
      <img 
        src={image}
        alt="Playlist art Image"
        className="rounded-lg cursor-pointer shadow-xl"
      />
      </NavLink>

      <div className="flex flex-col gap-1 text-center">
        <h3 onClick={onClick} className="font-bold bg-blue-900 rounded-md p-2 cursor-pointer">
          About this Playlist
        </h3>
        {show ? <p className="text-gray-300 group-hover:text-gray-100">{desc}</p>: null}
      </div>
    </div>
  );
};
export default Items;
