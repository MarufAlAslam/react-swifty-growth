import React from "react";
import phone from "../../assets/img/phone.png";
import logo from "../../assets/img/logo.png";
import { IoCardOutline } from "react-icons/io5";
import { FaIdeal } from "react-icons/fa6";
import { GiDna2 } from "react-icons/gi";

import cards from "../../assets/img/cards.png";

const CreditCard = () => {
  return (
    <div className="page min-h-screen overflow-y-auto">
      <div className="container">
        <div className="link-facebook relative bg-cover">
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
              Now! See tomorrow’s post - <br />
              Plus 30 More!
            </p>

            <div className="credit-card bg-white p-4 border-4 border-blue-500 rounded-[20px] md:w-1/2 w-2/3 mx-auto my-6">
              <form action="">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="item text-left">
                    <input type="radio" name="card" id="card1" />
                    <label
                      htmlFor="card1"
                      className="block border-2 border-black rounded-[10px] p-3"
                    >
                      <IoCardOutline />
                      <p className="mt-2">Card</p>
                    </label>
                  </div>
                  <div className="item text-left">
                    <input type="radio" name="card" id="card2" />
                    <label
                      htmlFor="card2"
                      className="block border-2 border-black rounded-[10px] p-3"
                    >
                      <FaIdeal />
                      <p className="mt-2">iDeal</p>
                    </label>
                  </div>
                  <div className="item text-left">
                    <input type="radio" name="card" id="card3" />
                    <label
                      htmlFor="card3"
                      className="block border-2 border-black rounded-[10px] p-3"
                    >
                      <GiDna2 />
                      <p className="mt-2">bancontact</p>
                    </label>
                  </div>
                </div>

                <label htmlFor="" className="block text-left">
                  Card Number
                </label>
                <div className="flex border justify-between items-center gap-3 px-3 rounded">
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="rounded h-[40px]"
                    name=""
                    id=""
                  />
                  <img
                    src={cards}
                    className="cards md:w-[150px] w-[100px]"
                    alt=""
                  />
                </div>
                <div className="flex mt-4 justify-between items-center gap-3">
                  <div className="w-full">
                    <label htmlFor="" className="block text-left">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="rounded h-[40px] border px-3 w-full"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="block text-left">
                      Security Code
                    </label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="rounded h-[40px] w-full border px-3"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <button className="mt-4 w-full py-3 bg-[#5554f5] text-gray-300 font-semibold rounded text-lg">
                  Pay $24.90
                </button>
              </form>
            </div>
            <p className="md:text-3xl font-bold josefin-bold-italic text-white">
              New post made everyday to your Facebook, <br />
              for less than $0.99 cents per day!
            </p>
          </div>

          <div className="relative lg:w-[35%] md:w-1/2 sm:w-2/3 w-[80%] mx-auto">
            <img src={phone} className="md:my-5 my-11 mx-auto block" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
