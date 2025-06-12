import navbar from "@/constraints/navbar.data";
import serviceData from "@/constraints/servicedata.data";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-brand-color text-white   ">
      <div className="md:flex gap-x-20 px-16 p-6 ">
        <div className="grid gap-y-3 md:w-2/6 pr-6">
          <img src="/img/logo2.png" alt="logo" className="h-10" />
          <p>
            © 2025 Udan Courier. Fast. Reliable. Everywhere. | Delivering your
            parcels with care and speed across the nation.
          </p>
          <Link href="/aboutus" className="hover:underline text-brand-color2 ">
            Readmore..
          </Link>
          <div className=" flex items-center justify-center md:justify-start gap-x-3 text-3xl text-brand-color2 mt-2">
            <CiFacebook />
            <CiTwitter />
            <CiInstagram />
          </div>
        </div>
        <div className="md:w-1/6 hidden md:block">
          <h1 className="text-lg font-bold mb-8 uppercase relative after:absolute after:h-1 after:w-9 after:bg-brand-color2 after:-bottom-3 after:left-0 ">
            Site Map
          </h1>
          <ul className="gap-y-2 grid ">
            {navbar.map((data, index) => {
              return (
                <li key={index} className="hover:text-brand-color2">
                  <Link href={data.link}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-1/6 hidden md:block">
          <h1 className="text-lg font-bold mb-8 uppercase relative after:absolute after:h-1 after:w-9 after:bg-brand-color2 after:-bottom-3 after:left-0">
            Our Service
          </h1>
          <ul className="gap-y-2 grid">
            {serviceData.slice(0,5).map((data, index) => {
              return (
                <li key={index} className="hover:text-brand-color2">
                  {data.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-2/6 mt-6 md:mt-0 ">
          <h1 className="text-lg font-bold mb-8 uppercase relative after:absolute after:h-1 after:w-9 after:bg-brand-color2 after:-bottom-3 after:left-0">
            Get in Touch
          </h1>
          <div className="flex gap-x-4">
            <MdLocationOn className="text-[40px] text-brand-color2" />
            <p>Gathghar, Bhaktapur, Nepal</p>
          </div>
          <div className="flex gap-x-4 items-center mt-5">
            <MdCall className="text-2xl text-brand-color2" />
            <span>+977-9808958655/9701127863</span>
          </div>
          <div className="flex  items-center mt-5 gap-x-4">
            <MdEmail className="text-2xl text-brand-color2" />
            <span>udaancourier10@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/img/ftr-bg.png" alt="img" className="opacity-30 md:-mt-20" />
        <Link href="/" className="justify-center flex opacity-80">
          Develop by: Pratik Pageni and Jit Bdr Rana
        </Link>
      </div>
    </div>
  );
};

export default Footer;
