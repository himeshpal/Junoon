import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="h-[400px] w-[280px] flex flex-col rounded-xl shadow-xl overflow-hidden">
      <div className="h-2/4">
        <img className="h-full w-full object-cover" src={props.src} alt="img" />
      </div>
      <div
        className={`h-2/4 text-slate-200 flex flex-col items-center justify-center p-6 ${props.bgColor}`}
      >
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-base mt-2 text-center">{props.des}</p>
        <Link to={props.link}>
          <button className="text-base mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            {props.buttonText || "Read more"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
