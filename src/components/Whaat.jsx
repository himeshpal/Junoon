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
      <div className=" text-white text-justify font-sans text-[2rem] text-xl font-semibold  px-40 pb-12">
        <p>
          Currently, we conduct daily classes at four centers: Kandivali
          Skywalk, Borivali, Saidham, and Magathane. Our goal is to expand our
          reach to an additional 100 students by the end of this year, further
          increasing our impact and empowering more children to realize their
          full potential. Our Programs include
        </p>
      </div>
      <div className="flex justify-center space-x-20">
        <Card
          title="EDUCATION"
          des="Education is not merely a means to acquire knowledge, it is the "
          src="problem.png"
          link="/work/education#top"
          bgColor="bg-black"
        />
        <Card
          title="HEALTH"
          des="Imagine a world where every child gets to skip hop through "
          src="https://res.cloudinary.com/de5psimvg/image/upload/v1720502528/Screenshot_2024-07-08_224847_toazdt.png"
          link="/work/health-groceries#top"
          bgColor="bg-black"
        />
        <Card
          title="GROCERY"
          des="Trust is a very important factor connected to a child’s education"
          src="https://res.cloudinary.com/de5psimvg/image/upload/v1720506663/Screenshot_2024-07-09_115548_tonqjv.png"
          link="/work/health-groceries#top"
          bgColor="bg-black"
        />
      </div>
    </div>
  );
};

export default Whaat;
