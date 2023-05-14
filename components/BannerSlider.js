import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpeg";
import b3 from "../img/b3.jpg";

SwiperCore.use([Navigation, Autoplay]);

function BannerSlider() {
  return (
    <Swiper
      pagination={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className=" max-h-[10rem] md:max-h-[25rem]  w-[100%] "
    >
      <SwiperSlide className="w-full ">
        <Image
          className=" max-h-[10rem] md:max-h-[25rem] "
          src={b1}
          height={400}
          width={400}
          alt="product banner image"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full ">
        <Image
          className=" max-h-[10rem] md:max-h-[25rem] "
          src={b2}
          height={400}
          width={400}
          alt="product banner image"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full ">
        <Image
          className=" max-h-[10rem] md:max-h-[25rem] "
          src={b3}
          height={400}
          width={400}
          alt="product banner image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default BannerSlider;

{
  /* <div
          className="flex w-full h-screen mx-0"
          style={{
            backgroundImage: `url(${b1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-2 grid-flow-col lg:grid-flow-row">
            
            <div className="">
              <p className="invisible">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo, pariatur alias reiciendis blanditiis ipsum veniam
                inventore adipisci nisi veritatis nobis!
              </p>
            </div>


            <div className="relative">
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-pink-600 md:h-40 h-20">
                <p
                  className=" font-bun uppercase 
                md:text-[4rem]
                text-[3rem] 
                 text-center
                md:text-right         
               tracking-tight
                    leading-tight
                md:leading-normal
                md:tracking-widest 
                
                
                -mt-7 mr-0 "
                >
                  {" "}
                  Tarot <br />
                  <span className="mt-0"> mini kits</span>
                </p>
              </div>
               <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-10">
                  <p className="text-white font-semibold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[50px]">79.00</span>
                  </p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[30px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div> 
            </div>

          </div>
        </div> */
}
