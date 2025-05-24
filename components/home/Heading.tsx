import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="md:text-[34px] text-2xl font-bold uppercase">
        {title} _____
      </h3>
    </div>
  );
};

export default Heading;
