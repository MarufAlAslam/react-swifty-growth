import React from "react";
import phone from "../../assets/img/phone.png";
// import link from "../../assets/img/link.png";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/arrow.png";
import confirm from "../../assets/img/confirmFacebookLink.png";
import { FaComment, FaEllipsis, FaShare, FaThumbsUp } from "react-icons/fa6";

import like from "../../assets/img/like.svg"
import love from "../../assets/img/love.svg"

const ClickSubmit = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="link-facebook relative">
          <img
            src={logo}
            className="absolute bottom-[15px] left-[15px] z-10 w-[100px]"
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

          <div className="relative lg:w-[35%] md:w-1/2 sm:w-2/3 w-[80%] mx-auto">
            <img src={phone} className="md:my-5 my-11 mx-auto block" alt="" />
            <div className="facebook-content w-full absolute md:top-20 top-[120px] md:px-6 px-10">
              <div className="flex w-full justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" className="w-[35px] h-[35px] object-cover rounded-full" alt="" />
                  <div className="">
                    <p className="text-black text-sm font-bold mb-0">Ayshare</p>
                    <p className="text-black text-sm relative top-[-2px]">Just now</p>
                  </div>
                </div>

                <button>
                  <FaEllipsis />
                </button>
              </div>

              <div className="post pt-2">
                <p className="mb-3 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" />
              </div>

              <div className="interactions">
                <div className="flex items-center">
                  <div className="like"><img src={like} className="w-[10px]" alt="" /></div>
                  <div className="love"><img src={love} className="w-[10px]" alt="" /></div>
                  <span className="text-xs block ml-1 mt-1">52</span>
                </div>
              </div>

              <div className="reactions py-1 border-t">
                <div className="flex justify-between items-center">
                  <button className="flex text-xs justify-center items-center w-full gap-1">
                    <FaThumbsUp className="mb-1" /> Like
                  </button>
                  <button className="flex text-xs justify-center items-center w-full gap-1">
                    <FaComment className="mb-1" /> Comment
                  </button>
                  <button className="flex text-xs justify-center items-center w-full gap-1">
                    <FaShare className="mb-1" /> Share
                  </button>
                </div>
              </div>

            </div>
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
