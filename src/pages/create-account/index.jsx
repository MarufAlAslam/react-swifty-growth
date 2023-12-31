import React from "react";
import arrow from "../../assets/img/arrow.png";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import grow from "../../assets/img/sale-grow.png"

const CreateAccount = () => {
  return (
    <div className="page relaive">
      <div className="container">
        <div className="create-account relative">
          <img
            src={logo}
            className="absolute bottom-[15px] left-[15px] z-10 w-[100px]"
            alt=""
          />
          <img src={grow} className="absolute md:top-[-100px] top-[-30px] md:right-16 right-5 lg:w-1/2 w-2/3" alt="" />
          <form className="form bg-white p-4 border-4 border-blue-500 md:w-[60%] w-[80%] mt-auto md:mb-0 mb-10 ml-auto">
            <input
              placeholder="First Name..."
              type="text"
              className="bg-white p-3 placeholder:text-black text-black text-lg mb-4 border-2 border-blue-500 h-[45px] rounded w-full"
              name=""
              id=""
            />
            <input
              placeholder="Email..."
              type="text"
              className="bg-white p-3 placeholder:text-black text-black text-lg mb-4 border-2 border-blue-500 h-[45px] rounded w-full"
              name=""
              id=""
            />
            <input
              placeholder="Website Address..."
              type="text"
              className="bg-white p-3 placeholder:text-black text-black text-lg mb-4 border-2 border-blue-500 h-[45px] rounded w-full"
              name=""
              id=""
            />

            <p className="josefin-bold-italic md:text-xl md:ml-6 relative z-10">
              See Your Free Post
            </p>
            <p className="josefin-bold-italic md:text-3xl text-xl md:ml-6">
              Click Here
            </p>
            <img src={arrow} className="arrow" alt="" />

            <Link to={"/link-facebook"} className="btn md:w-3/4 w-full block mx-auto text-center font-bold md:text-xl bg-[#e1e1e1] border-4 border-blue-500 rounded-xl md:px-6 py-2">
              See My Free Post
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
