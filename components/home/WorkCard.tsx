import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const WorkCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div>
      <div className="">
        <div className="justify-around">
          <div className="rounded-full w-32 h-32 border-2 border-white flex items-center justify-around p-6 relative">
            <img
              src={`img/home/${icon}`}
              alt="book"
              className="w-[3rem] justify-center"
            />
            <div className=" flex items-center justify-center rounded-full w-12 h-12 bg-brand-color2 absolute text-white -right-[18px] border-white border-2">
              <MdKeyboardDoubleArrowRight size={25} />
            </div>
          </div>
          <p className="font-bold mt-2 text-center">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
