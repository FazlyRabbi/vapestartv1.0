import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_URL } from "@/config/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ThumbGellery({ url }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);



  return (
    <div>
      {" "}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`max-h-[30rem]  rounded-md`}
            alt="product__imgae"
            src={`${url.url_1 && `${url.url_1}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`max-h-[30rem]  rounded-md`}
            alt="product__imgae"
            src={`${url.url_2 && `${url.url_2}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`max-h-[30rem]  rounded-md`}
            alt="product__imgae"
            src={`${url.url_3 && `${url.url_3}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`max-h-[30rem]  rounded-md`}
            alt="product__imgae"
            src={`${url.url_4 && `${url.url_4}`}`}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`rounded-md max-h-[5rem]`}
            alt="product__imgae"
            src={`${url.url_1 && `${url.url_1}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`rounded-md max-h-[5rem]`}
            alt="product__imgae"
            src={`${url.url_2 && `${url.url_2}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`rounded-md max-h-[5rem]`}
            alt="product__imgae"
            src={`${url.url_3 && `${url.url_3}`}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            className={`rounded-md max-h-[5rem]`}
            alt="product__imgae"
            src={`${url.url_4 && `${url.url_4}`}`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
