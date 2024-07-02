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
                The Teamcard component creates a card that flips to reveal
                additional information when hovered over. The front side
                displays an image, and the back side displays text information,
                all styled using Tailwind CSS classes. The flip effect is
                achieved using CSS 3D transforms and transitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
