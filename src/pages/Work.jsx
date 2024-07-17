import React from "react";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <>
      <div
        id="top"
        className="min-h-[30vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/de5psimvg/image/upload/v1720441193/bg1d_asvqta.png')",
        }}
      >
        <h1 className="pt-4 pb-2 text-center text-7xl font-bold text-white font-abc">
          <span className="text-orange-600">Edu</span>cation
        </h1>
      </div>

      <div className="bg-neutral-950">
        <p className="px-32 pt-10 font-light text-2xl text-justify text-white font-['Roboto',_sans-serif]">
          Education is not merely a means to acquire knowledge, it is the
          cornerstone of a prosperous society and the beacon that lights the way
          to a better tomorrow. Education empowers individuals by providing them
          with the knowledge and skills necessary to navigate and excel in the
          world. It opens doors to opportunities that might otherwise remain
          closed. It equips us with critical thinking, problem-solving
          abilities, and the capacity to innovate and adapt. In a rapidly
          changing global landscape, these skills are invaluable. At Junoon, we
          believe that every child, regardless of their background, deserves the
          chance to learn, grow, and thrive.
        </p>
        <p className="px-32 pt-10 pb-10 text-2xl font-medium text-justify text-white font-['Roboto',_sans-serif]">
          Our mission is to bring education directly to underserved communities,
          ensuring that no child is left behind. Through our makeshift classes,
          we make learning accessible to children who might otherwise be
          deprived of this basic right. These classes not only focus on primary
          literacy but also embrace holistic education, nurturing the entire
          being of each child. We run programs such as:
        </p>
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <div className="flex pt-20 pb-12 bg-neutral-900">
          <div className="pl-40 w-full h-full">
            <img
              src="https://res.cloudinary.com/de5psimvg/image/upload/v1720440944/Class_1_df48np.png"
              alt="Daily Classes"
              className="w-96 h-96 rounded-lg shadow-md"
            />
          </div>
          <div className="px-20">
            <h1 className="text-5xl font-bold text-center font-abc text-orange-600">
              Daily Classes
            </h1>
            <p className="pt-20 text-2xl font-medium text-justify text-white font-['Roboto',_sans-serif]">
              At Junoon, we bring education right to the children's doorsteps.
              Our makeshift classes ensure that primary education is accessible
              to all, fostering literacy and holistic development. We believe in
              nurturing not just the mind but the entire being, preparing
              underprivileged kids for a brighter future.
            </p>
          </div>
        </div>
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <div className="flex py-20 px-20 space-x-4 bg-neutral-950">
          <div className="px-20">
            <h1 className="text-5xl font-bold text-center font-abc text-orange-600">
              Extra Curricular Activities
            </h1>
            <p className="pt-20 pl-10 text-2xl font-medium text-justify text-white font-['Roboto',_sans-serif]">
              Beyond academics, we focus on holistic growth through
              extracurricular activities. These programs ignite creativity,
              foster teamwork, and build confidence, ensuring our
              underprivileged children grow into well-rounded individuals.
            </p>
          </div>
          <div className="pr-20 w-full">
            <img
              src="https://res.cloudinary.com/de5psimvg/image/upload/v1720441990/art2_1_nmflhq.png"
              alt="Extracurricular Activities"
              className="w-96 h-[388px] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="font-bold font-abc text-center text-5xl py-10 text-orange-600">
          School Admission
        </h1>
        <p className="font-medium text-xl text-justify px-32 py-5 font-['Roboto',_sans-serif] text-white">
          Formal education is essential for every child to pursue their unique
          dreams and achieve their full potential. To ensure they receive proper
          schooling, we take proactive steps by approaching schools for
          admissions on their behalf. We understand that navigating the
          admission process and arranging the necessary documentation can be
          daunting, especially for families facing economic challenges.
          Therefore, we provide comprehensive support to simplify this process,
          ensuring that every child has the opportunity to access quality
          education and the resources they need to succeed. By doing so, we help
          pave the way for a brighter future for these children, empowering them
          to realize their aspirations and contribute positively to society.
        </p>
        <div className="flex justify-center py-10 gap-20">
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720460016/Screenshot_2024-07-08_230224_ososku.png"
            alt="School Admission"
            className="w-100 h-80 rounded-lg"
          />
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720456997/School_2_nimy1x.png"
            alt="School Admission"
            className="w-98 h-80 rounded-lg"
          />
        </div>
      </div>

      <div className="px-10 bg-neutral-950">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="pt-10 pb-20 text-5xl font-bold font-abc text-center text-orange-600">
          Our Stories of Change
        </h1>
        <div className="flex flex-wrap justify-center gap-10 pb-20">
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720440632/ss3_fgddz4.png"
            alt="Story 1"
            className="w-74 h-80 object-cover"
          />
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720440633/ss2_oqqtst.png"
            alt="Story 2"
            className="w-74 h-80 object-cover"
          />
          <img
            src="https://res.cloudinary.com/de5psimvg/image/upload/v1720442118/Screenshot_2024-07-08_022051_sedys0.png"
            alt="Story 3"
            className="w-74 h-80 object-cover"
          />
        </div>
      </div>

      <div className="px-10 bg-neutral-900">
        <div className="w-3/4 mx-auto border-t-2 border-yellow-400" />
        <h1 className="pt-10 pb-20 text-5xl font-bold text-center font-abc text-orange-600">
          Our Impact
        </h1>
      </div>
    </>
  );
};

export default Work;
