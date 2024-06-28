import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-yellow-500 px-5 py-5 texl-xl font-bold text-white  hover:bg-white hover:text-yellow-400 rounded-full border-3 border-yellow-400 leading-none tracking-tighter m-0 p-0 ">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
