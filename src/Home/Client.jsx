import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Client = () => {
  return (
    <>
      <div className="client-outer">
        <div className="container">
          <div className="client-inner">
            <div className="client-head">
              <h2>Client Testimonials</h2>
              <p>What they say</p>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {" "}
                <div className="client">
                  <div className="client-photo">
                    <img src="assets/image/client1.jpg" alt="Client" />
                  </div>
                  <div className="client-info">
                    <p>
                      All Perfect !! I have three sites with magento , this
                      theme is the best !! Excellent support , advice theme
                      installation package , sorry for English, are Italian but
                      I had no problem !! Thank you !
                    </p>
                    <div className="client-profile">
                      <span className="client-name">John Sullivan</span>
                      <span className="client-position">Customer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="client">
                  <div className="client-photo">
                    <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/04/testimonial1-150x150.jpg" alt="Client" />
                  </div>
                  <div className="client-info">
                    <p>
                      All Perfect !! I have three sites with magento , this
                      theme is the best !! Excellent support , advice theme
                      installation package , sorry for English, are Italian but
                      I had no problem !! Thank you !
                    </p>
                    <div className="client-profile">
                      <span className="client-name">Jenifer Brown</span>
                      <span className="client-position">Manager of AZ</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="client">
                  <div className="client-photo">
                    <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/04/testimonial3-150x150.jpg" alt="Client" />
                  </div>
                  <div className="client-info">
                    <p>
                      All Perfect !! I have three sites with magento , this
                      theme is the best !! Excellent support , advice theme
                      installation package , sorry for English, are Italian but
                      I had no problem !! Thank you !
                    </p>
                    <div className="client-profile">
                      <span className="client-name">Kathy Young</span>
                      <span className="client-position">CEO of SunPark</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
