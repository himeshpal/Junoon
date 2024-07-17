import React from "react";
import Faq from "../components/Faq.jsx";

const Donate = () => {
  return (
    <>
      <div className="relative w-full h-96">
        <img
          src="Donate.jpg"
          alt="Slant Image"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 text-8xl font-abc">
          DONATE
        </div>
      </div>
      <div className="bg-neutral-900 text-black py-20 px-20 flex flex-col items-center">
        <div className="flex flex-wrap justify-evenly gap-x-60">
          <div className="text-justify text-white max-w-lg px-5">
            <h1 className="font-abc text-orange-500 text-6xl pb-10 text-start">
              HOW YOU CAN HELP
            </h1>
            <p className="pb-7">
              In a time when so many are suffering and in need of assistance and
              every dollar donated will be used in furtherance of our mission.
              Your tax-deductible donation allows us to continue supporting our
              causes and those in need.
            </p>
            <p className="pb-7">
              MrBeast is committing to donating 100% of his revenue from the
              Beast Philanthropy YouTube channel to the operation of the
              Philanthropy. Including the revenue made from our merch sales.
            </p>
            <p className="pb-14">
              Our goal is to make the world a better place. Join our kindness
              movement!
            </p>
            <button className="bg-yellow-500 items-center justify-center px-8 py-4 font-bold text-white">
              Donate
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5 px-5  w-80">
            <img
              src="do1-modified.jpg"
              className="w-full h-auto"
              alt="Image 1"
            />
            <img
              src="do1-modified.jpg"
              className="w-full h-auto"
              alt="Image 2"
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-800">
        <Faq />
      </div>
    </>
  );
};

export default Donate;
