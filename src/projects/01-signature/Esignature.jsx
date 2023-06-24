import React, { useState } from "react";
import Title from "../components/Title";

const Esignature = () => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  console.log(name);
  return (
    <div className=" flex flex-col gap-5 mx-10 mt-5">
      <p className=" text-3xl font-semibold text-yellow-600 tracking-wider italic">
        <Title text={name} classes={"text-blue-500"} />
      </p>
      <p className=" text-2xl font-semibold italic">
        <Title
          text={!date ? "Date of birth" : date}
          classes={"text-blue-500"}
        />
      </p>
      <p className=" mx-28 text-center my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga quis
        debitis culpa porro voluptate magni recusandae, impedit possimus libero
        harum eaque incidunt dolor esse? Sequi modi blanditiis corporis
        delectus?
      </p>
      <div className=" flex items-center justify-between">
        <div className="">
          <input
            type="date"
            name=""
            id=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className=" shadow-md cursor-pointer rounded-full mt-10 ms-4 outline-none border-b-2 border-gray-200 px-4 py-1"
          />
        </div>
        <div className=" mt-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className=" shadow-md border-b-2 me-10 px-6 py-1 rounded-full outline-none"
            placeholder="Write your name here ...."
          />
        </div>
      </div>
    </div>
  );
};

export default Esignature;
