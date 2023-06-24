import React from "react";
import Title from "../components/Title";

const RandomColor = () => {
  const handleClick = () => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
  };
  // making a random body colour
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className=" mt-28">
      <p className=" text-3xl font-semibold text-gray-500 italic tracking-wider">
        <Title text={"Random Color"} />
      </p>
      <div className=" mt-9 flex items-center justify-center gap-5">
        <button
          onClick={handleClick}
          className=" px-6 py-1 rounded-md shadow-md text-white bg-red-500">
          Red
        </button>
        <button
          onClick={handleClick}
          className=" px-6 py-1 rounded-md shadow-md text-white bg-green-500">
          Green
        </button>
        <button
          onClick={handleClick}
          className=" px-6 py-1 rounded-md shadow-md text-white bg-blue-500">
          Blue
        </button>
        <button
          onClick={handleClick}
          className=" px-6 py-1 rounded-md shadow-md text-white bg-yellow-500">
          Yellow
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
