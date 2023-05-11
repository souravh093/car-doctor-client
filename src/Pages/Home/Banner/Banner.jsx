import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full h-full object-cover">
        <img src={banner1} className="w-full" />
        <div className="bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex-inline gap-5 left-0 top-0">
          <div className="space-y-7 pl-12">
            <h2 className="text-6xl font-bold max-w-2xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white font-medium max-w-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full object-cover" />
        <div className="bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex-inline gap-5 left-0 top-0">
          <div className="space-y-7 pl-12">
            <h2 className="text-6xl font-bold max-w-2xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white font-medium max-w-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full object-cover" />
        <div className="bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex-inline gap-5 left-0 top-0">
          <div className="space-y-7 pl-12">
            <h2 className="text-6xl font-bold max-w-2xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white font-medium max-w-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full object-cover" />
        <div className="bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex-inline gap-5 left-0 top-0">
          <div className="space-y-7 pl-12">
            <h2 className="text-6xl font-bold max-w-2xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white font-medium max-w-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
