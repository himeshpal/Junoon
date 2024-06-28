import React from "react";
import Teamcard from "../layouts/Teamcard";

const Teams = () => {
  return (
    <div className="bg-black">
      <h1 className="text-yellow-400 font-bold text-center text-6xl pb-10 mb-5">
        Our Team
      </h1>
      <div className="flex flex-wrap gap-10 pl-10 ml-5 py-10  bg-black">
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
      </div>
      <div className="flex flex-wrap gap-10 pl-10 ml-5 py-20 my-5  bg-black">
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
        <Teamcard
          src="./founder.jpg"
          name="Himesh Pal"
          role="Founder"
          line="Homelander was fuckin right"
        />
      </div>
    </div>
  );
};
export default Teams;
