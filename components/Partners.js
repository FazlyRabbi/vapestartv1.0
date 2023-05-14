import Image from "next/image";
import partner1 from "../img/1-copyright.png";
import partner2 from "../img/2-copyright.png";
import partner3 from "../img/3-copyright.png";
import partner4 from "../img/4-copyright.png";
import partner5 from "../img/5-copyright.png";

import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function Partners() {
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
                    slidesPerView: 4,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 4,
                },
            }}
            slidesPerView={4}
            spaceBetween={15}
            freeMode={true}
            // modules={[ Pagination]}
            className=""
        >

            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner1}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="mr-0">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner2}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner3}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner4}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner5}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner1}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner2}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner3}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner4}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="">
                    <Image
                        height={160}
                        width={160}
                        className={`max-h-[20rem] border-4 border-gray-300 p-3`}
                        alt="product__imgae"
                        src={partner5}
                    />
                </div>
            </SwiperSlide>


        </Swiper>
    )
}
export default Partners;