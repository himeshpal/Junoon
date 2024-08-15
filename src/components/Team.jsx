import React from "react";
import Teamcard from "../layouts/Teamcard";

const Teams = () => {
  return (
    <div className="bg-black py-14">
      <div className="text-center text-6xl font-bold text-white pt-2 pb-14">
        <h1>
          <span className="text-orange-400 font-bold text-6xl relative bottom-4">
            +
          </span>
          MEET THE TEAM
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-32 bg-orange-700"></div>
      </div>
      <div className="flex flex-wrap gap-10 pl-10 ml-5 py-10  bg-black">
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
      </div>
      <div className="flex flex-wrap gap-10 pl-10 ml-5 py-5 my-5  bg-black">
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
        <Teamcard
          src="./founder.jpg"
          name="Haimanti Sen"
          role="Founder"
          line="Team description"
        />
      </div>
    </div>
  );
};
export default Teams;
