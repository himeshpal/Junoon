import React from "react";
import Card from "../layouts/card";

const Program = () => {
  return (
    <div className="py-10  bg-black">
      <div className="text-center font-abc text-5xl font-bold text-white pt-2 pb-14">
        <h1 className="text-yellow-400 font-bold text-center text-6xl font-abc">
          OUR PROGRAMS
        </h1>
      </div>
      <div className="text-center text-white px-40 text-lg pb-5">
        <p>
          In the early 16th century, northern India, then under mainly Muslim
          rulers, fell again to the superior mobility and firepower of a new
          generation of Central Asian warriors. The resulting Mughal Empire did
          not stamp out the local societies it came to rule. Instead, it
          balanced and pacified them through new administrative practices and
          diverse and inclusive ruling elites, leading to more systematic,
          centralised, and uniform rule. Eschewing tribal bonds and Islamic
          identity, especially under Akbar, the Mughals united their far-flung
          realms through loyalty, expressed through a Persianised culture, to an
          emperor who had near-divine status.
        </p>
      </div>
      <div className="flex justify-center space-x-20">
        <Card
          title="EDUCATION"
          des="Blah blah Blah blah Blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah"
          src="problem.png"
          link="/work/education#top"
          bgColor="bg-neutral-950"
        />
        <Card
          title="HEALTH"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="problem.png"
          link="/work/health-groceries#top"
          bgColor="bg-neutral-950"
        />
        <Card
          title="GROCERY"
          des="Blah blah Blah blah Blah blah Blah blah"
          src="problem.png"
          link="/work/health-groceries#top"
          bgColor="bg-neutral-950"
        />
      </div>
    </div>
  );
};

export default Program;
