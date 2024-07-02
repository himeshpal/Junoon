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
          It because, my believe, but very - its a condition of education,
          learning, what is learning, intertainment, internet, and the online
          industry, is making people better that change there lives with a very
          understanding and strongly, i believe that, that damage don’t from the
          people, its a stand and a chance, we all can open in understanding
          trying to bring back, more confidence, actual challenge data.
        </p>
        <p>
          Every child deserves for to tide away from their past, and dream, they
          have the power to make their future with dream, stop the bullying of a
          represent of adult. The time is coming, learning, is really help them
          to understand the information in engaging, and help children will
          stand up for their right with comprehend - what mean understanding.
        </p>

        {/* <Link to="/about" spy={true} smooth={true} duration={500}>
          <Button title="Learn more" />
        </Link> */}
      </div>
    </div>
  );
};
export default Who;
