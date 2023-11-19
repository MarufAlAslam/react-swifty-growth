import React from "react";
import phone from "../../assets/img/phone.png";
// import link from "../../assets/img/link.png";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/arrow.png";
import confirm from "../../assets/img/confirmFacebookLink.png";

const ClickSubmit = () => {
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
            <p className="md:text-4xl text-2xl font-bold josefin-bold-italic text-white">
              Grow Your Sales!
            </p>
            <p className="md:text-3xl font-bold mb-2 josefin-bold-italic text-white">
              With The Power Of Facebook
            </p>
            <p className="md:text-2xl font-bold josefin-bold-italic text-white">
              WOW! Your Post Looks Great!
            </p>
          </div>

          <div className="relative md:w-[35%] w-[80%] mx-auto">
            <img src={phone} className="my-5 mx-auto block" alt="" />

            <div className="txts scale-[70%] w-[80%] text-left absolute md:bottom-[-30px] bottom-10 md:left-[25px] left-8">
              <p className="md:text-lg relative z-10 josefin-bold-italic text-black">
                Click Submit
              </p>

              <img src={arrow} className="arrow sm-arrow md:block hidden" alt="" />
              <img src={confirm} className="confirm md:w-[100px] w-[60px] md:-top-[40px] relative block" alt="" />

              <p className="md:text-xl relative w-full md:-top-[30px] top-2 z-10 josefin-bold-italic text-right mr-20 text-black">
                And Click Here
              </p>

              <img src={arrow} className="arrow flipped-arrow md:block hidden" alt="" />

              <Link
                to={"/congratulations"}
                className="btn text-center mt-2 relative  md:top-[-50px] md:left-0 left-5 mr-3 md:w-3/4 w-full block mx-auto font-bold text-sm bg-[#e1e1e1] border-4 border-blue-500 rounded-xl px-2 md:py-2"
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

export default ClickSubmit;
