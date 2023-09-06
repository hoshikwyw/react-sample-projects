import React, { useEffect, useState } from "react";
import {FaCommentDots,FaUserAlt} from "react-icons/fa"
import {GiPostOffice} from "react-icons/gi"

const Testimonial = () => {
    const [testimonial,setTestimonial] = useState('')
    const [items,setItems] = useState()

    useEffect( () => {
      fetch(`https://jsonplaceholder.typicode.com/${testimonial}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[testimonial])

    // console.log(items);

  return (
    <div className=" w-full justify-center items-center">
      <h2 className=" text-3xl font-semibold tracking-widest text-center text-[#fff]">Testimonial</h2>
      <div className=" flex gap-4 justify-center w-full py-3">
        <button className=" bg-blue-400 px-3 py-1 font-semibold text-white rounded flex items-center gap-2 hover:bg-blue-500" onClick={() => setTestimonial("posts")}>Posts <span><GiPostOffice /></span></button>
        <button className=" bg-blue-400 px-3 py-1 font-semibold text-white rounded flex items-center gap-2 hover:bg-blue-500" onClick={() => setTestimonial("users")}>Users <span><FaUserAlt /></span></button>
        <button className=" bg-blue-400 px-3 py-1 font-semibold text-white rounded flex items-center gap-2 hover:bg-blue-500" onClick={() => setTestimonial("comments")}>Comments <span><FaCommentDots /></span></button>
      </div>
      <h2 className=" text-lg text-white font-semibold tracking-widest ps-10">{!testimonial ? 'Select from above!' : testimonial}</h2>
      <div className=" flex flex-col gap-3 mt-5">
        {!items ? null : items.map((item) => {
          return(
            <div className=" border border-white rounded px-3 py-1 bg-[#ffffff83]">
              <h2 className=" ">{item.id}. <span className=" text-white ">{item.title}{item.name}</span> </h2>
              <h2 className=" ps-3 text-[#272727b4]">{item.body}{item.website}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Testimonial;
