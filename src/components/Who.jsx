import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Who = () => {
  return (
    <div className="flex items-center gap-5 py-40 bg-neutral-900 px-10 pl-60">
      <div className="text-justify  font-bold text-6xl outline outline-[6.5px] outline-orange-500 px-20 py-10 text-bold rounded-2xl text-white ">
        <h1 className="">
          <span className="text-orange-400 font-bold text-5xl absolute left-72 bottom-[-210px]">
            +
          </span>{" "}
          WHO
        </h1>
        <h1 className="py-3">WE</h1>
        <h1>ARE</h1>
      </div>
      <div className="text-white text-lg text-justify space-y-4 pl-12 pr-40">
        <p>
          Established in 2018, Junoon Foundation is a dedicated non-profit
          organisation committed to addressing the educational and essential
          support needs of 150 homeless children in the Borivali and Kandivali
          areas of Mumbai. Our mission is to provide these children with the
          opportunities they need to build a brighter future
        </p>

        {/* <Link to="/about" spy={true} smooth={true} duration={500}>
          <Button title="Learn more" />
        </Link> */}
      </div>
    </div>
  );
};
export default Who;
