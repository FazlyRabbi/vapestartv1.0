import "../styles/ProductSlider.module.css";
import Image from "next/image";
import { Chip } from "@material-tailwind/react";


import p1 from "../img/products/p1.jpg"
import p2 from "../img/products/p2.jpg"
import p3 from "../img/products/p3.jpg"
import p4 from "../img/products/p4.jpg"
import p5 from "../img/products/p5.jpg"
import p6 from "../img/products/p6.jpg"


import Link from "next/link";

import { FaStar } from "react-icons/fa";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay]);

function ProductSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 1,
        },
        640: {
          width: 620,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
        },
      }}
      navigation={true}
      slidesPerView={4}
      spaceBetween={20}
      freeMode={true}
      className="  snap-center"
    >
      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div
            className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black 
          overflow-hidden   "
          >
            <div className="  -z-40">
              <Image
                height={450}
                width={450}
                className={`max-h-[35rem] `}
                alt="product__imgae"
                src={p1}
              />
            </div>

            <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>{" "}
      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black   ">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem] `}
              alt="product__imgae"
              src={p2}
            />
            <div className="  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>{" "}

      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black   ">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem] `}
              alt="product__imgae"
              src={p4}
            />
            <div className="  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>{" "}
      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black   ">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem] `}
              alt="product__imgae"
              src={p5}
            />
            <div className="  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>{" "}
      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black   ">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem] `}
              alt="product__imgae"
              src={p6}
            />
            <div className="  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>

      
      <SwiperSlide className="rounded-3x " id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="  border  rounded-sm  hover:shadow-2xl  transition-all duration-200 border-black   ">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem] `}
              alt="product__imgae"
              src={p4}
            />
            <div className="  font-eco py-4 bg-[#111111] text-white">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>

              <div className="flex items-center  justify-center ">
                <p className="text-yeollow  font-bold">
                  $<span className="text-[1.3rem]">26.99</span>
                </p>
              </div>
            </div>

            {/* sale bage */}
            <Chip
              className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
              value="sale!"
            />
          </div>
        </Link>
      </SwiperSlide>{" "}
    </Swiper>
  );
}
export default ProductSlider;
