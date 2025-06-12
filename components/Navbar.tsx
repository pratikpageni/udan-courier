import navbar from "@/constraints/navbar.data";
import Link from "next/link";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="bg-brand-color md:px-16 p-1 text White md:flex justify-between text-white text-base  ">
        <div className="flex items-center gap-x-5 md:text-base text-xs">
          <div className="flex gap-x-2 items-center ">
            <BiPhoneCall className="" />
            <span>+977-9808958655/9701127863</span>
          </div>
          <div className="flex gap-x-2 items-center">
            <AiOutlineMail className="" />
            <span>udaancourier10@gmail.com</span>
          </div>
        </div>
        <div className=" items-center gap-x-3 hidden ">
          <button className="px-3 py-1 bg-brand-color2 rounded-md font-semibold">
            Branch Login
          </button>
          {/* <CiFacebook />
          <CiTwitter />
          <CiInstagram /> */}
        </div>
      </div>
      <div className=" flex md:px-16 px-5 py-1 items-center sticky top-0 justify-between">
        <div className="w-1/2 flex ">
          <Link href="/">
            <img src="img/logo2.png" alt="logo" className="md:h-[80px] h-[60px]" />
          </Link>
        </div>
        <div>
          <ul className="md:flex font-bold hidden  ">
            {navbar.map((data, index) => {
              return (
                <li className="p-4 text-base" key={index}>
                  <Link href={data.link}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button onClick={() => setshow(!show)} className="md:hidden block">
            {show ? <RxCrossCircled size={30} /> : <BsList size={30} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          show ? "block" : "hidden"
        } w-full fixed  bg-[#f0f2f5] z-[999999] shadow-2xl shadow-bg-gray-300 `}
      >
        <ul className="grid grid-cols-1">
          {navbar.map((data, index) => {
            return (
              <li className="p-6 text-base border-b" key={index}>
                <Link href={data.link}>{data.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
