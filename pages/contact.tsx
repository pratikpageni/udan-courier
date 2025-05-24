import Banner from "@/components/Banner";
import Heading from "@/components/home/Heading";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";
import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

const contact = () => {
  return (
    <Mainlayout>
      <Banner
        Heading="Contact Us"
        breadcrumb={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Contact Us",
            link: "/contact",
          },
        ]}
      />
      <div className="md:p-16 p-5">
        <Heading title="Get in Touch" />
        <p className="mt-6 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ullam
          consectetur sint? Quidem iure quisquam, beatae quos voluptatum soluta
          voluptate quasi nostrum. Obcaecati iste officiis voluptas quos tempore
          dolorem pariatur.
        </p>
        <div className="md:flex gap-x-10 md:mb-16 mb-8">
          <div className="md:w-[35%]">
            <div className="border-1 border">
              <div className="border-b">
                <Location
                  icon={<MdLocationOn size={30} />}
                  details="Lorance Road 542B,A 7 Sector 10,Wordwide Country"
                />
              </div>
              <div className="border-b">
                <Location
                  icon={<MdMail size={30} />}
                  details="info@Udan.com.np, help@Udan.com.np"
                />
              </div>
              <div className="">
                <Location
                  icon={<MdCall size={30} />}
                  details="987654321, 987654321"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[65%] grid grid-cols-1 gap-y-4 mt-8 md:mt-0">
            <input
              placeholder="Name"
              className="px-3 py-1 md:py-0   w-full bg-[#f2f2f2] border outline-none "
            />
            <input
              placeholder="Email"
              className="px-3 w-full py-1 md:py-0  bg-[#f2f2f2] border outline-none"
            />
            <input
              placeholder="Subject"
              className="px-3 w-full py-1 md:py-0  bg-[#f2f2f2] border outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full py-1 md:py-0   bg-[#f2f2f2] border p-2  outline-none"
            />
            <button className="px-4 py-2 bg-brand-color2 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

const Location = ({
  icon,
  details,
}: {
  icon: React.ReactNode;
  details: string;
}) => {
  return (
    <div className="flex m-5 gap-x-3 items-center justify-between">
      <div className=" w-[30%] ">
        <div className="rounded-full w-16 h-16 border flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="w-[70%]">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default contact;
