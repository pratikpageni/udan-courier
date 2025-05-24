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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores
          magnam qui consequuntur explicabo ratione officiis deserunt! Quo, eum
          illum. Nostrum consequatur voluptas atque culpa error voluptatibus
          corrupti alias minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium accusantium error excepturi similique
          reprehenderit, vel ab nulla eligendi corporis id nesciunt quisquam
          illo ea deleniti iste est laudantium quia quae!
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
