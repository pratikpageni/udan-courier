import { socialData } from "@/data/social.data";
import React from "react";

export const SocialGroup = () => {
  return (
    <div className="fixed bottom-[10rem] right-0 z-50">
      <div className="grid grid-cols-1   justify-items-end rounded-bl-md">
        {socialData?.map((m, i) => (
          <a
            key={i}
            target="_blank"
            rel="noreferrer"
            href={m?.link}
            className={`text-white p-2 hover:px-10 hover:rounded-bl-md hover:rounded-tl-md  ${
              i == 0 && "rounded-tl-md"
            } ${
              i + 1 == socialData?.length && "rounded-b-md"
            }   hover bg-brand-color`}
          >
            {m?.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default SocialGroup;
