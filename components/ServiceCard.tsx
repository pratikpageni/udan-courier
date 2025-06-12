import { ServiceInterface } from "@/constraints/servicedata.data";
import React from "react";

const ServiceCard = ({ data }: { data: ServiceInterface }) => {
  return (
    <div className="flex-wrap shadow-lg border">
      <img
        src={data?.image}
        alt="photo"
        className="h-[16rem] object-cover w-full "
      />
      <div className="bg-brand-color p-3 text-white font-bold text-2xl -mt-14 opacity-90 text-center">
        <h3>{data?.title}</h3>
      </div>
      <p className="p-4 text-justify">{data?.description}</p>
    </div>
  );
};

export default ServiceCard;
