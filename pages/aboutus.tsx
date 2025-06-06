import Banner from "@/components/Banner";
import Heading from "@/components/home/Heading";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const aboutus = () => {
  return (
    <Mainlayout>
      <div>
        <Banner
          Heading="About Us"
          breadcrumb={[
            {
              link: "/",
              title: "Home",
            },
            {
              link: "/",
              title: "About Us",
            },
          ]}
        />
        <div className="md:p-16 p-5">
          <History />
        </div>
        <Mission />
        <div className="md:p-16 p-5">
          <Message />
        </div>
      </div>
    </Mainlayout>
  );
};

const History = () => {
  return (
    <div className="md:flex grid md:gap-x-14">
      <div className="gap-y-6 md:w-[60%] w-full">
        <Heading title="Our History" />
        <p className="mt-6 text-justify md:text-start">
          Established in the heart of Nepal, our company began with a clear
          purpose — to make logistics seamless and dependable across the
          country. From delivering essential goods to remote villages to
          managing bulk shipments in Kathmandu, we’ve steadily grown into a name
          people trust.
        </p>
        <p>
          Starting with a small team and local routes, we now operate nationally
          with a robust network of delivery professionals and infrastructure.
          Our expansion into international logistics has opened doors for Nepali
          businesses to connect with global markets — efficiently and
          affordably.
        </p>
      </div>
      <div className="md:w-[40%]">
        <div className="border-[8px] border-white shadow-2xl">
          <img
            src="/img/aboutus/history.jpg"
            alt=""
            className="w-full h-[20rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Mission = () => {
  return (
    <div className="gap-x-20 justify-between md:flex bg-slate-300 md:p-16 p-5">
      <div className="md:w-1/2">
        <h1 className="font-bold text-2xl mb-4 before:w-12 before:h-1 before:bg-brand-color before:absolute relative before:-bottom-2 ">
          Our Mission
        </h1>
        <div className="md:flex gap-x-7 items-center">
          <div className="gap-y-6 md:w-[60%]">
            <p>
              We aim to simplify logistics for our customers by offering fast,
              secure, and cost-effective delivery solutions. Whether its a
              same-day parcel or international shipment, our mission is to
              ensure every package reaches its destination safely and on time.
              We continuously strive to innovate and exceed customer
              expectations by embracing technology and sustainable practices.
            </p>
          </div>
          <div className="md:w-[40%]">
            <div className="border-[8px] border-white shadow-2xl mt-5 md:-mt-5">
              <img
                src="/img/aboutus/history.jpg"
                alt=""
                className="w-full md:h-[8rem] h-[20rem]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-5 md:mt-0">
        <h1 className="font-bold text-2xl mb-4 before:w-12 before:h-1 before:bg-brand-color before:absolute relative before:-bottom-2 ">
          Our Value
        </h1>
        <div className="md:flex gap-x-7 items-center">
          <div className="gap-y-6 md:w-[60%]">
            <p>
              Integrity, reliability, and customer focus are the core values
              that guide our company. We believe in building long-term
              relationships with our clients through transparency and
              exceptional service. Our dedicated team works tirelessly to uphold
              these values and deliver an experience that goes beyond
              transportation.
            </p>
          </div>
          <div className="md:w-[40%]">
            <div className="border-[8px] border-white shadow-2xl mt-5 md:-mt-5">
              <img
                src="/img/aboutus/history.jpg"
                alt=""
                className="md:w-full md:h-[8rem] object-cover h-[20rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div>
      <div className="mb-8">
        <Heading title="A MESSAGE FROM OUR FOUNDER & CEO" />
      </div>
      <div className="md:flex gap-x-16 items-center grid grid-cols-1 ">
        <div className="md:w-[60%] bg-gray-300 md:px-16 px-5 py-8  order-last md:order-first ">
          <div className="flex justify-center md:mb-8 mb-4">
            <ImQuotesLeft size={50} />
          </div>
          <p className="text-center ">
            “We started this company with a single goal in mind — to make
            delivery services faster, easier, and more accessible for everyone.
            Today, I am proud to see how far we have come. But our journey doesnt
            end here. We are committed to growing with our customers and
            continuing to improve how the world ships and receives goods.”
          </p>

          <div className="text-center mt-8 border-t pt-8">
            <p className="font-bold text-xl text-brand-color">Pratik Pageni</p>
            <p className="text-sm">Founder & CEO</p>
          </div>
        </div>
        <div className="md:w-[40%] md:mb-0 mb-5">
          <div className="border-[6px] border-gray-300 md:shadow-2xl ">
            <img
              src="/img/aboutus/ceo.jpg"
              alt=""
              className="w-full h-[20rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
