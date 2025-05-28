import Banner from "@/components/Banner";
import ServiceCard from "@/components/ServiceCard";
import Heading from "@/components/home/Heading";
import serviceData from "@/constraints/servicedata.data";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const service = () => {
  return (
    <Mainlayout>
      <Banner
        Heading="Service"
        breadcrumb={[
          {
            link: "/",
            title: "Home",
          },
          {
            link: "/",
            title: "Service",
          },
        ]}
      />
      <div className="md:p-16 p-5">
        <Heading title="Our Service" />
        <p className="mt-6 mb-10">
          We specialize in providing comprehensive delivery solutions tailored
          to meet the unique needs of Nepal’s diverse geography and growing
          economy. Whether you need urgent same-day delivery within cities like
          Kathmandu, Pokhara, or Biratnagar, or reliable shipments to remote
          mountain regions, our nationwide network ensures your packages arrive
          safely and on time. Beyond Nepal, we offer trusted international
          delivery services connecting businesses and individuals to over 200
          countries worldwide, complete with customs clearance support and
          real-time tracking. Our freight services cater to large and heavy
          shipments, while our 24/7 delivery option ensures that urgent packages
          reach their destination at any hour. For e-commerce businesses, we
          provide seamless warehousing, order fulfillment, and shipping
          solutions designed to accelerate online retail growth across Nepal.
          With a focus on reliability, transparency, and customer satisfaction,
          our services are built to support both local communities and global
          trade.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {serviceData.map((data, index) => {
            return <ServiceCard data={data} key={index} />;
          })}
        </div>
      </div>
    </Mainlayout>
  );
};

export default service;
