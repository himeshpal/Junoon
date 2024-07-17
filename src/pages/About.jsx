import Aboutus from "../components/Aboutus.jsx";
import Problem from "../components/Problem.jsx";
import Team from "../components/Team.jsx";
import Program from "../components/Program.jsx";

const About = () => {
  return (
    <>
      <Aboutus />
      <div className="bg-gray-700 h-1.5 w-full  "></div>
      <Problem />
      <div className="bg-gray-700 h-1.5 w-full  "></div>
      <Program />
      <div className="bg-gray-700 h-1.5 w-full "></div>
      <Team />
    </>
  );
};
export default About;
// min-h-screen flex-col justify-centre
