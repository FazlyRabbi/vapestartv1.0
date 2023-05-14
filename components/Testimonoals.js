import '../styles/ProductSlider.module.css';


import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function Testimonials() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    width: 320,
                    slidesPerView: 1,
                },
                640: {
                    width: 620,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 1,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 1,
                }
            }}
            slidesPerView={1}
            spaceBetween={25}
            freeMode={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
        >
            <SwiperSlide >
                <div className="text-left">
                   <p>Qualified support team, unique products, good prices- Vapester got it all. I’ve never felt so satisfied after buying something online. I hope someday every online shop can be like Vapester.</p>
                    <p>Tom Adams, New york</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="text-left">
                    <p>A huge variety of products, amazing support staff, and nice discounts. Got a free juice refill for my vape and 15% discount on a new vape. 10/10 rating for Vapester, I will definitely shop here again.</p>
                    <p>Sam Smith, Dallas</p>
                </div>
            </SwiperSlide>          

        </Swiper>
    )
}
export default Testimonials;