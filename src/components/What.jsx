import Happycard from "../layouts/happy";

const What = () => {
  return (
    <div className="py-5  bg-neutral-950 ">
      <div className="text-center text-5xl font-bold text-white pt-2 pb-14 ">
        <h1>
          <span className="text-orange-400 font-bold text-5xl relative bottom-4 ">
            +
          </span>
          WHAT WE DO
        </h1>
        <div className="mx-auto mt-6 h-0.5 w-24 bg-orange-700"></div>
      </div>
      <div className="text-center text-white px-40 text-lg  pb-5 ">
        <p>
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>
      </div>
      <div className="flex flex-wrap gap-1 gap-y-1 justify-center">
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
        <Happycard src="problem.png" />
      </div>
    </div>
  );
};
export default What;
