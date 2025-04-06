import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Brands = () => {
    return (
        <>
            <div className="brans-outer">
                <div className="container">
                    <div className="brans-inner">

                        <Swiper
                            spaceBetween={0}
                            slidesPerView={5}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                0: {
                                    slidesPerView: 5
                                },
                                991: {
                                    slidesPerView: 5
                                },
                                1600: {
                                    slidesPerView: 5
                                }
                            }}
                        >
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand1.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand2.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand3.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand4.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand5.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand1.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand2.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand3.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand4.jpg" alt="brand" /></a></div></SwiperSlide>
                            <SwiperSlide><div className="brand-name-outer"><a href="#"><img src="assets/image/brand5.jpg" alt="brand" /></a></div></SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands
