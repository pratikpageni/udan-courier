import React from "react";
import Heading from "./Heading";
import ServiceCard from "../ServiceCard";
import CustomCarousel from "../CustomCarousel";
import serviceData from "@/constraints/servicedata.data";

const HomeService = ({}) => {
  return (
    <div className="relative">
      <div className="mb-6">
        <Heading title="Our Service " />
      </div>

      <CustomCarousel>
        {serviceData.map((data, index) => {
          return <ServiceCard data={data} key={index} />;
        })}
      </CustomCarousel>

      {/* <div className="grid grid-cols-3 gap-4">
        <ServiceCard />
      </div> */}
    </div>
  );
};

export default HomeService;
