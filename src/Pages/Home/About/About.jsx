import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="grid grid-cols-2 lg:flex-row">
        <div className="w-full relative">
          <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-10 top-1/2 border-8 border-red-50 rounded-lg "
          />
        </div>
        <div className="w-full space-y-5 px-10">
          <p className="text-2xl text-orange-500 font-bold">About us</p>
          <h1 className="text-5xl font-bold max-w-2xl">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 w-2/3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </p>
          <p className="w-2/3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
