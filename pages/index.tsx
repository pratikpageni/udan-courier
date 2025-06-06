import Heading from "@/components/home/Heading";
import HomeService from "@/components/home/HomeService";
import ShipmentStatus from "@/components/home/ShipmentStatus";
import WorkCard from "@/components/home/WorkCard";
import Mainlayout from "@/layouts/Mainlayout";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const home = () => {
  return (
    <Mainlayout>
      <Tracker />
      <div className="py-20 grid grid-cols-1 gap-y-16">
        <div className="md:px-16 px-5 ">
          <Experience />
        </div>
        <WorkProcess />
        <div className="md:px-16 px-5 ">
          <HomeService />
        </div>
      </div>
    </Mainlayout>
  );
};

const Tracker = () => {
  const [tracknumber, setTracknumber] = useState<string>("");
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const track = () => {
    if (tracknumber.trim()) {
      const url = `https://parcelsapp.com/en/tracking/${tracknumber}`;
      window.open(url, "_blank"); // Opens in a new tab
    }
  };

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
      <div className="bg-[url('/img/home/home.jpg')] bg-cover bg-center w-full md:h-[85vh] h-[70vh]">
        <div className="md:p-24 p-10">
          <div className="md:w-[40%]">
            <h1 className="font-bold text-5xl text-brand-color stroke-white">
              Track Your Package
            </h1>
            <div className="bg-white px-4 py-2 rounded-lg w-full mt-10 flex gap-x-2">
              <img src="img/home/tracking.png" alt="logo" className="h-[32px]" />
              <input
                onChange={(event) => setTracknumber(event.target.value)}
                type="text"
                placeholder="Enter the tracking number"
                className="w-full px-2 outline-none"
              />
              <button
                onClick={track}
                className="bg-brand-color px-3 py-1 rounded-xl text-white"
              >
                Track
              </button>
            </div>

            <div className="justify-center flex">
              <img
                src="img/home/scooter.png"
                alt="scooter photo"
                className="object-cover md:h-[45vh] scooter-updown-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Experience = () => {
  return (
    <div>
      <div className="md:flex">
        <div className="md:w-[65%]">
          <div className="flex items-center">
            <h1 className="text-[110px] font-bold text-brand-color2">20</h1>
            <img src="img/home/trolly.png" alt="trolly" />
          </div>
          <Heading title="YEARS OF EXPERIENCE" />
          <p className="mt-8">
            Udaan Worldwide Courier Services is the most reliable and
            trustworthy courier service across World. We provide the easiest,
            fastest, most affordable, and time-definite delivery of parcels. We
            help you reach your personal, professional, and private courier
            packages with complete satisfaction.
          </p>
          <div className="grid grid-cols-2 mt-10 gap-y-4">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">Same-Day Delivery</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">Real-Time Tracking</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">Doorstep Pickup</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">Nationwide Coverage</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">Competitive Rates</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500" />
              <p className="ml-3">24/7 Customer Support</p>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] w-full bg-black md:ml-20 text-white mt-20 md:mt-0">
          <div className="flex items-center justify-between pr-12 border-b border-white">
            <img src="img/home/man.png" alt="man" className="-mt-8" />
            <h2 className="text-3xl font-mono ">Get a quote</h2>
          </div>
          <div className="p-4 grid gap-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 font-mono outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 font-mono outline-none"
            />
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-2 font-mono outline-none"
            />
            <div className="grid grid-cols-2 gap-x-5">
              <input
                type="text"
                placeholder="Move From"
                className="w-full p-2 font-mono outline-none"
              />
              <input
                type="number"
                placeholder="Move To"
                className="w-full p-2 font-mono outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="p-2 w-full h-24"
            ></textarea>
            <button className="w-full p-3 items-center bg-brand-color2 mt-6">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkProcess = () => {
  return (
    <div className="py-10 px-16 bg-brand-color2 text-white">
      <h1 className="text-center text-3xl font-bold mb-10">Our Work Process</h1>
      <div className="md:flex gap-y-3 justify-between items-center px-16">
        <WorkCard title="Book your Service" icon="booking.png" />
        <HiArrowLongRight color="white" size={40} className="hidden md:block" />
        <WorkCard title="Pack Your Goods" icon="package.png" />
        <HiArrowLongRight color="white" size={40} className="hidden md:block" />
        <WorkCard title="Safe Loading" icon="fast-delivery.png" />
        <HiArrowLongRight color="white" size={40} className="hidden md:block" />
        <WorkCard title="Safe Delivery" icon="delivery-man.png" />
      </div>
    </div>
  );
};

export default home;
