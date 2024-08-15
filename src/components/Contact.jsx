import React, { useRef } from "react";
import { LOGO_URL } from "../utils/constants";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b0372a2e-f70c-4597-8d33-dd5a56a98df0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Reset the form fields
      formRef.current.reset();
    }
  };

  return (
    <div>
      <div
        id="contact"
        className="flex items-center justify-center bg-neutral-900 pb-16"
      >
        <div className="items-center justify-center pr-28">
          <img src={LOGO_URL} alt="img" className="w-61 h-44" />
          <div className="text-xl pl-10 text-white pt-8 space-y-5 font-abc">
            <h1 className="flex items-center">
              <FaLocationDot
                style={{ color: "white", marginRight: "1.5rem" }}
              />{" "}
              Kandivali East station
            </h1>
            <h1 className="flex items-center">
              <IoCall style={{ color: "white", marginRight: "1.5rem" }} />{" "}
              076780 06154
            </h1>
            <h1 className="flex items-center">
              <MdEmail style={{ color: "white", marginRight: "1.5rem" }} />
              haimantisen.junoon@gmail.com
            </h1>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit}>
          <div className="pt-24 space-y-8">
            <div className="flex space-x-5">
              <div className="flex flex-col space-y-2 w-80">
                <label htmlFor="userName" className="text-white text-lg">
                  Name
                </label>
                <input
                  className="py-4 px-3 rounded-full hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all bg-black text-white border-transparent focus:border-yellow-500 hover:border-yellow-500"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col space-y-2 w-80">
                <label htmlFor="userNumber" className="text-white text-lg">
                  Phone No.
                </label>
                <input
                  className="py-4 px-3 rounded-full hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all bg-black text-white border-transparent focus:border-yellow-500 hover:border-yellow-500"
                  type="tel"
                  name="userNumber"
                  id="userNumber"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="userEmail" className="text-white text-lg">
                Email
              </label>
              <input
                className="py-4 px-3 rounded-full hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all bg-black text-white w-full border-transparent focus:border-yellow-500 hover:border-yellow-500"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="userMessage" className="text-white text-lg">
                Message
              </label>
              <textarea
                className="py-4 px-3 rounded-2xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all bg-black text-white w-full border-transparent focus:border-yellow-500 hover:border-yellow-500"
                name="userMessage"
                id="userMessage"
                placeholder="Enter your message"
                rows="6"
              />
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className=" bg-orange-400 px-5 py-5 texl-xl font-bold text-white  hover:bg-yellow-500 hover:text-white rounded-full border-3 border-yellow-400 leading-none  m-0 p-0 "
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-orange-400 flex justify-around items-center">
        <div className="flex py-4 space-x-6">
          <a
            href="https://www.facebook.com/Humhaijunoon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandFacebook className="hover:text-black text-[1.5rem] text-white" />
          </a>
          <a
            href="https://www.instagram.com/humhaijunoon/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="hover:text-black text-[1.5rem] text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/junoon-foundation/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin className="hover:text-black text-[1.5rem] text-white" />
          </a>
        </div>
        <div>
          <p className="text-white text-xs py-4 font-['Roboto',_san-serif] pl-20">
            &copy;2024 JUNOON FOUNDATION <span className="px-3"> | </span> ALL
            RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
