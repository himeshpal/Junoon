import React from "react";
import Card from "../layouts/card";

const Whaat = () => {
  return (
    <div className="py-5 bg-neutral-900">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-14">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative bottom-4">
            +
          </span>
          WHAT WE ARE UPTO
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-24 bg-orange-700"></div>
      </div>
      <div className="text-center text-white px-40 text-lg pb-5">
        <p>
          Currently, we conduct daily classes at four centres: Kandivali
          Skywalk, Borivali, Saidham, and Magathane. Our plan is to extend our
          reach to an additional 100 students by the end of this year, further
          expanding our impact and helping more children achieve their
          potential.
        </p>
      </div>
      <div className="flex justify-center space-x-20">
        <Card
          title="EDUCATION"
          des="Blah blah Blah blah Blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah"
          src="problem.png"
          link="/work/education#top"
          bgColor="bg-black"
        />
        <Card
          title="HEALTH"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="https://res.cloudinary.com/de5psimvg/image/upload/v1720502528/Screenshot_2024-07-08_224847_toazdt.png"
          link="/work/health-groceries#top"
          bgColor="bg-black"
        />
        <Card
          title="GROCERY"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="https://res.cloudinary.com/de5psimvg/image/upload/v1720506663/Screenshot_2024-07-09_115548_tonqjv.png"
          link="/work/health-groceries#top"
          bgColor="bg-black"
        />
      </div>
    </div>
  );
};

export default Whaat;
