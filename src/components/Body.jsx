import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div
      className="min-h-[85vh] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dxjdfqjau/image/upload/v1719166768/image_2_ozmy3x.jpg)",
      }}
    >
      <div className="text-center pl-4 pb-7 ">
        <h1 className="font-bold  text-[5.5rem] text-stone-100">
          Each <span className="text-orange-500"> one, </span> Teach{" "}
          <span className="text-orange-500"> one</span>
        </h1>
        <p className="font-bold text-[2rem] text-white ">
          {" "}
          help them create a brighter{" "}
          <span className="text-orange-500"> tomorrow. </span>
        </p>
      </div>
      <div className="flex space-x-28 pt-8">
        <Link to="/donate">
          {" "}
          <Button title="Donate Now" className="pr-4"></Button>{" "}
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScgIkCvfYGbaezvGF3Glk60x7bcCU0Y_iR_len_2X01FhZLmQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button title="Get Involved"></Button>
        </a>
      </div>
    </div>
  );
};
export default Body;
