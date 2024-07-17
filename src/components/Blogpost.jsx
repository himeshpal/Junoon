import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import useFetch from "../hooks/useFetch";

const Blogpost = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs/?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-neutral-950 min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-52 space-y-12">
        {data.data.map((blog) => (
          <div
            key={blog.id}
            className="flex gap-5 p-4 bg-neutral-900 rounded-2xl shadow-lg yellow-shadow relative"
          >
            <img
              src="http://localhost:1337/uploads/small_Drawing_38da83989b.jpg"
              alt="coverimage"
              className="rounded-2xl object-cover w-80 h-64"
            />
            <div className="text-white flex flex-col  hover:text-yellow-400 ">
              <div className="space-y-3 pb-2 text-justify">
                <h1 className="text-2xl font-bold">{blog.attributes.Title}</h1>
                <div className="text-white">
                  {formatDate(blog.attributes.publishedAt)}
                </div>
                <p className="mt-2 text-white">
                  {blog.attributes.Description.substring(0, 250)}...
                </p>
              </div>
              <Link to={`/blogs/${blog.id}#top`}>
                {" "}
                {/* Added #top anchor */}
                <button className="flex items-center gap-x-2 mt-4 bg-orange-500 text-white  py-2 px-4 rounded-3xl hover:bg-yellow-500 transition duration-300 self-start">
                  Read More <GoArrowRight />
                </button>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpost;
