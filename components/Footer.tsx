import navbar from "@/constraints/navbar.data";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-brand-color text-white   ">
      <div className="md:flex gap-x-20 px-16 p-6 ">
        <div className="grid gap-y-3 md:w-2/6 pr-6">
          <img src="/img/logo.png" alt="logo" className="h-10" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ex nostrum voluptate facilis. Animi delectus optio
            molestiae possimus quam natus repellendus nemo nobis, quo temporibus
            quidem sed nesciunt eligendi voluptate.
          </p>
          <Link href="/aboutus" className="hover:underline text-brand-color2 ">
            Readmore..
          </Link>
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
            {[0, 0, 0, 0, 0].map((data, index) => {
              return (
                <li key={index} className="hover:text-brand-color2">
                  Courier
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
            <p>110, Lorance Road Sanewadi, Badlapur (W), Thane, Melbourne.</p>
          </div>
          <div className="flex gap-x-4 items-center mt-5">
            <MdCall className="text-2xl text-brand-color2" />
            <span>+977-986365136</span>
          </div>
          <div className="flex  items-center mt-5 gap-x-4">
            <MdEmail className="text-2xl text-brand-color2" />
            <span>pagenipratik@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <img src="/img/ftr-bg.png" alt="img" className="opacity-30" />
        <Link href="/" className="justify-center flex opacity-80">
          Develop by: Pratik Pageni and Jit Bdr Rana
        </Link>
      </div>
    </div>
  );
};

export default Footer;
