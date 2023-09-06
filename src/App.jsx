import React from "react";
import ESignature from "./projects/01-signature/Esignature";
import RandomColor from "./projects/02-random-colour/RandomColor";
import LikePhoto from "./projects/03-give-like-to-photo/LikePhoto";
import Testimonial from "./projects/04-Testimonials/Testimonial";

const App = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-10">
      <div className=" bg-slate-500 p-10 rounded-md mx-auto">
        <ESignature />
      </div>
      <div className=" p-10 rounded-md mx-auto">
        <RandomColor />
      </div>
      <div className=" bg-red-200 p-10 rounded-md w-full">
        <LikePhoto />
      </div>
      <div className=" p-10 bg-neutral-500 rounded-md w-full">
        <Testimonial />
      </div>
    </div>
  );
};

export default App;
