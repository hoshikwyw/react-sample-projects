import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";

const LikePhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const giveLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className=" uppercase text-3xl font-serif font-semibold tracking-widest pb-5">
        Give a like ...
      </h2>
      <div className=" h-full flex gap-4">
        <div className=" rounded w-fit">
          <div className=" flex gap-5 items-center bg-white px-3 py-1 rounded-t">
            <img
              src="https://i.pinimg.com/564x/f2/cd/78/f2cd780b447bd198f1195e12db11ce8a.jpg"
              alt=""
              className=" w-12 h-12 rounded-full"
            />
            <h2 className=" font-semibold font-sans text-xl">OroWee</h2>
          </div>
          <div className=" object-cover">
            <img onClick={giveLike} onDoubleClick={giveLike}
              className=" object-cover w-full"
              src="https://i.pinimg.com/474x/2e/c9/a6/2ec9a6ac02a1aa9d328628dc6e674726.jpg"
              alt=""
            />
          </div>
          <div className=" bg-white flex w-full justify-between px-5 rounded-b text-3xl py-2">
            <button className=" text-[#2d4cb3]">
              <FaCommentDots />
            </button>
            <button
              className={` flex items-center gap-1 ${
                like ? "text-[#b32929]" : ""
              }`}
              onClick={giveLike}>
              <BsHeartFill />
              <span className=" text-lg">{count} like</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikePhoto;
