import React from "react";

const Why = () => {
  return (
    <div className="py-20 bg-neutral-950 space-y-[-100px] ">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-14 relative z-10">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative bottom-4 ">
            +
          </span>
          WHY WE'RE HERE
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-20 bg-orange-700"></div>
      </div>
      <div className=" px-60 justify-center items-center shadow-lg ">
        <div className=" h-80 w-full bg-neutral-900 rounded-xl shadow-lg shadow-black from-gray-900">
          <div className="relative h-full w-full rounded-xl    ">
            <div className="flex min-h-full flex-col items-centre justify-center">
              <p className="text-white text-center">
                Many children, often seen begging or selling goods at railway
                stations and traffic signals, face immense struggles and
                challenges, missing out on their fundamental right to education.
                We aim to introduce education and learning into their lives,
                equipping them to become school-ready and opening doors to
                better opportunities in their future. Additionally, we address
                their nutritional and healthcare needs to ensure their overall
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
