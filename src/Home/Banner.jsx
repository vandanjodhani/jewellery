import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';

const Banner = () => {
    return (
        <>
            {/* Banner section start */}
            <div className="banner-outer">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide> <div className="banner-main">
                        <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/slideshow1-1.jpg" alt="banner" />
                        <div className="container">
                            <div className="banner-inner">
                                <div className="inner-content ">
                                    <h2 className='animate__animated animate__slideInDown'>Family Jewellery Collection</h2>
                                </div>
                                <div className="content">
                                    <p className='animate__animated animate__zoomIn'>Designer Jewellry Necklaces-Bracelets-Earings </p>
                                </div>
                                <div className="btn">
                                    <button className="button animate__animated animate__fadeIn">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="banner-main">
                        <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/slideshow1-2.jpg" alt="banner" />
                        <div className="container">
                            <div className="banner-inner">
                                <div className="inner-content">
                                    <h2 className='animate__animated animate__slideInDown'>Diamonds Jewelry Collection</h2>
                                </div>
                                <div className="content">
                                    <p className='animate__animated animate__zoomIn'>Shukra Yogam & Silver Power Silver Saving Schemes.</p>
                                </div>
                                <div className="btn">
                                    <button className="button animate__animated animate__fadeIn">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="banner-main">
                        <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/slideshow1-3.jpg" alt="banner" />
                        <div className="container">
                            <div className="banner-inner">
                                
                                <div className="inner-content">
                                    <h2 className='animate__animated animate__slideInDown'>Grace Gesigner Jewellery</h2>
                                </div>
                                <div className="content">
                                    <p className='animate__animated animate__zoomIn'>Rings, Occasion Pieces,Pandora & More.</p>
                                </div>
                                <div className="btn">
                                    <button className="button animate__animated animate__fadeIn">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
            {/* Banner section end */}
        </>
    )
}

export default Banner
