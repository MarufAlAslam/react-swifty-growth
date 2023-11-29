import React from "react";
import phone from "../../assets/img/phone.png";
import link from "../../assets/img/link.png";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FaComment, FaEllipsis, FaShare, FaThumbsUp } from "react-icons/fa6";
import like from "../../assets/img/like.svg"
import love from "../../assets/img/love.svg"

const LinkFacebook = () => {
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

          <div className="relative lg:w-[35%] md:w-1/2 sm:w-2/3 mx-auto">
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

            <div className="txts text-right absolute md:bottom-10 bottom-10 right-[40px]">
              <p className="md:text-xl josefin-bold-italic text-black">
                Now! Click Here
              </p>
              <p className="md:text-lg josefin-bold-italic text-black">
                Link your post to <br /> Facebook with Ayshare
              </p>

              <Link to={"/click-submit"} className="text-center block mx-auto">
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
