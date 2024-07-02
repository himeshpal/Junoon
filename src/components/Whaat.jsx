import React from "react";
import Card from "../layouts/card";

const Whaat = () => {
  return (
    <div className="py-5  bg-neutral-900 ">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-14 ">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative bottom-4 ">
            +
          </span>
          WHAT WE ARE UPTO
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-24 bg-orange-700"></div>
      </div>
      <div className="text-center text-white px-40 text-lg  pb-5 ">
        <p>
          In the early 16th century, northern India, then under mainly Muslim
          rulers,[123] fell again to the superior mobility and firepower of a
          new generation of Central Asian warriors.[124] The resulting Mughal
          Empire did not stamp out the local societies it came to rule. Instead,
          it balanced and pacified them through new administrative
          practices[125][126] and diverse and inclusive ruling elites,[127]
          leading to more systematic, centralised, and uniform rule.[128]
          Eschewing tribal bonds and Islamic identity, especially under Akbar,
          the Mughals united their far-flung realms through loyalty, expressed
          through a Persianised culture, to an emperor who had near-divine
          status
        </p>
      </div>
      <div className="flex justify-center space-x-20 ">
        <Card
          title="EDUCTION"
          des="Blah blah Blah blah Blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah"
          src="problem.png"
        />
        <Card
          title="EDUCTION"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="problem.png"
        />
        <Card
          title="EDUCTION"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="problem.png"
        />
      </div>
    </div>
  );
};
export default Whaat;
