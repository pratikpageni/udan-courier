import Banner from "@/components/Banner";
import Heading from "@/components/home/Heading";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
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
          Have questions or need assistance? Udan is here to help. Whether its
          tracking a delivery, scheduling a pickup, or learning more about our
          courier services, our team is ready to support you. Contact us anytime
          — we would love to hear from you!
        </p>
        <div className="md:flex gap-x-10 md:mb-16 mb-8">
          <div className="md:w-[35%]">
            <div className="border-1 border">
              <div className="border-b">
                <Location
                  icon={<MdLocationOn size={30} />}
                  details="Gathaghar, Bhaktapur, Nepal"
                />
              </div>
              <div className="border-b">
                <Location
                  icon={<MdMail size={30} />}
                  details="udaancourier10@gmail.com help@Udan.com.np"
                />
              </div>
              <div className="border-b">
                <Location
                  icon={<MdCall size={30} />}
                  details="+977-9808958655/9701127863"
                />
              </div>
              <div className="flex hidden">
                <Location
                  icon={
                    <a
                      href="https://www.facebook.com/profile.php?id=61576839737739"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={30} />
                    </a>
                  }
                  // details="+977-9808958655/9701127863"
                />
                <Location
                  icon={
                    <a
                      href="https://wa.me/9701127863"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={30} />
                    </a>
                  }
                  // details="+977-9808958655/9701127863"
                />
                <Location
                  icon={
                    <a
                      href="https://www.tiktok.com/@udaancourier?_t=ZS-8x4zcZPtviE&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaTiktok size={30} />
                    </a>
                  }
                  // details="+977-9808958655/9701127863"
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
  details?: string;
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
