import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface Breadcrumb {
  title: string;
  link: string;
}

const Banner = ({
  bgImage,
  breadcrumb,
  Heading,
}: {
  bgImage?: string;
  Heading: string;
  breadcrumb: Breadcrumb[];
}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage || "/img/home/home.jpg"})`,
          backgroundRepeat: "no-repeat",
        }}
        className=" text-white  md:min-h-[35vh]  min-h-[20vh] bg-cover bg-no-repeat"
      >
        <div className="bg-black opacity-60 min-h-[35vh] z-10 px-16 flex items-center">
          <h1 className="text-4xl font-bold">{Heading}</h1>
        </div>
      </div>
      <div className="bg-gray-300 px-16 py-4 flex ">
        {breadcrumb.map((data, index) => {
          return (
            <div key={index} className="flex items-center gap-x-2">
              <span className={`${index == 0 && "font-bold"}`}>
                {data.title}
              </span>
              {index + 1 !== breadcrumb.length && (
                <MdKeyboardDoubleArrowRight />
              )}
            </div>
          );
        })}
        {/* <p>
          Home
          <span>
            <MdKeyboardDoubleArrowRight />
          </span>
          About Us
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
