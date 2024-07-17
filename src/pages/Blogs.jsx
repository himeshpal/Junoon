import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Blogpost from "../components/Blogpost";

const Blogs = () => {
  return (
    <>
      <div
        className="flex justify-center pt-10 flex-col 
    px-[70] md:px-[150px] bg-neutral-950"
      >
        <img src="blog.jpg" className="rounded-2xl " />
        <div
          className="bg-white shadow-lg p-3
       rounded-lg mt-[-5px] mx-[26%] flex items-center"
        >
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="outline-none ml-2 w-full"
          />
        </div>
      </div>
      <Blogpost />
    </>
  );
};

export default Blogs;
