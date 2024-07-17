import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div className="flex justify-between bg-black shadow-sm px-20 pl-36">
      <div className="Logo-container">
        <Link to="/">
          <img src={LOGO_URL} alt="App Logo" className="w-40" />
        </Link>
      </div>
      <div className="flex items-center px-20">
        <ul className="flex space-x-12 place-items-center">
          <li className="flex px-1 font-bold text-base text-white hover:text-yellow-400 cursor-pointer">
            <Link to="/about">About us</Link>
          </li>
          <li className="relative group ">
            <div className="flex font-bold text-base text-white hover:text-yellow-400 cursor-pointer">
              Our Work
            </div>
            <ul className="absolute left-0 mt-2 w-48 bg-neutral-950 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 z-10  ">
              <li className="px-4 py-2 hover:text-yellow-400 cursor-pointer font-bold text-white text-base  ">
                <Link to="/work/education">Education</Link>
              </li>
              <li className="px-4 py-2 hover:text-yellow-400 cursor-pointer font-bold text-white  ">
                <Link to="/work/health-groceries">Health & Groceries</Link>
              </li>
              <li className="px-4 py-2 hover:text-yellow-400 cursor-pointer font-bold text-white  ">
                <Link to="/work/events">Events</Link>
              </li>
            </ul>
          </li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScgIkCvfYGbaezvGF3Glk60x7bcCU0Y_iR_len_2X01FhZLmQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex font-bold text-base text-white hover:text-yellow-400 cursor-pointer">
              Volunteer
            </li>
          </a>
          <li className="flex font-bold text-base text-white hover:text-yellow-400 cursor-pointer">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="flex font-bold text-base text-white hover:text-yellow-400 cursor-pointer">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact us
            </ScrollLink>
          </li>
          <Link to="/donate">
            <button className="bg-yellow-500 px-4 py-4 texl-xl font-bold text-white hover:bg-white hover:text-yellow-400 rounded-full border-2 border-yellow-400 leading-none tracking-tighter m-0 p-0">
              Donate Now
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
