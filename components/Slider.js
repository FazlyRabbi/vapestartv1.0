import Image from "next/image";
import s1 from "../img/banner2.jpg";

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Autoplay]);

function slider() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <Image src={s1} height={400} width={400} alt="product banner" className=" rounded-md" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s1} height={500} width={500} alt="product banner" className=" rounded-md" />
      </SwiperSlide>
    </Swiper>
  );
}

export default slider;
