import React from "react";
import phone from "../../assets/img/phone.png";
// import link from "../../assets/img/link.png";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/arrow.png";

const Congratulations = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="link-facebook relative">
          <img
            src={logo}
            className="absolute bottom-[5px] left-[5px] z-10 w-[100px]"
            alt=""
          />
          <div className="text-center">
            <p className="md:text-6xl text-2xl font-bold josefin-bold-italic text-white">
              Grow Your Sales!
            </p>
            <p className="md:text-4xl font-bold mb-2 josefin-bold-italic text-white">
              With The Power Of Facebook
            </p>
            <p className="md:text-3xl font-bold josefin-bold-italic text-white">
            Congratulations! You have just made <br />
your first LIVE post!
            </p>
          </div>

          <div className="relative md:w-[50%] w-[80%] mx-auto">
            <img src={phone} className="my-5 mx-auto block" alt="" />

            <div className="txts w-[60%] text-left absolute md:bottom-4 bottom-8 md:left-[100px] left-8">
              <p className="md:text-4xl text-lg relative top-3 z-10 josefin-bold-italic text-black">
                Now! Click to See <br /> Tomorrows Post!
              </p>

              <img src={arrow} className="arrow mt-3 scale-105" alt="" />

              <Link
                to={"/link-facebook"}
                className="btn text-center mt-2 relative  md:top-[-50px] md:left-0 left-5 md:w-3/4 w-full block mx-auto font-bold md:text-xl text-sm bg-[#e1e1e1] border-4 border-blue-500 rounded-xl md:px-6 py-2"
              >
                Post on Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
