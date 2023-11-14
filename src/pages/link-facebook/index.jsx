import React from "react";
import phone from "../../assets/img/phone.png";
import link from "../../assets/img/link.png";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const LinkFacebook = () => {
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
              WOW! Your Post Looks Great!
            </p>
          </div>

          <div className="relative md:w-[50%] w-[80%] mx-auto">
            <img src={phone} className="my-5 mx-auto block" alt="" />

            <div className="txts text-right absolute md:bottom-24 bottom-10 md:right-[100px] right-8">
              <p className="md:text-4xl josefin-bold-italic text-black">
                Now! Click Here
              </p>
              <p className="md:text-3xl josefin-bold-italic text-black">
                Link your post to <br /> Facebook with Ayshare
              </p>

              <Link to={"/"} className="text-center block mx-auto">
                <img src={link} className="ms-auto block w-[75%] mt-3" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFacebook;
