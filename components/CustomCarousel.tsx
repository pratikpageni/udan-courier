import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  children: React.ReactNode;
}

const CustomCarousel = ({ children }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside={true}
      arrows={false}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      partialVisbile={false}
      keyBoardControl={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={300}
      centerMode={false}
      containerClass="relative -mx-5"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="p-5"
    >
      {children}
    </Carousel>
  );
};

const ButtonGroup = ({ next, previous }: { next?: any; previous?: any }) => {
  return (
    <div className="flex top-2 right-0 absolute gap-x-3 ">
      <div className="border border-black ">
        <button onClick={() => previous()} className="flex items-center p-1">
          <MdKeyboardArrowLeft size={30} />
        </button>
      </div>
      <div className="border border-black ">
        <button onClick={() => next()} className="flex items-center p-1">
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
