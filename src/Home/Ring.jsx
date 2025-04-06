import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Ring = () => {
  const product1 = [
    {
      id: 1,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg",
      title: "Carat Solitaire Diamond",
      price: "$78.00"
    },
    {
      id: 2,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg",
      title: "Diamond Band Ring",
      price: "$86.00"
    },
    {
      id: 3,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg",
      title: "Diamond Band Ring",
      price: "$100.00"
    },
    {
      id: 4,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/2.jpg",
      title: "Dissent Collar Earring",
      price: "$95.00"
    }
  ];
  const product2 = [
    {
      id: 5,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/13.jpg",
      title: "Long Earrings Women",
      price: "$70.00"
    },
    {
      id: 6,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/6.jpg",
      title: "Pear-Shaped Black",
      price: "$60.00 - $100.00"
    },
    {
      id: 7,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/1.jpg",
      title: "Sterling Silver Genuine",
      price: "$70.00"
    },
    {
      id: 8,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/12.jpg",
      title: "Women’s Bijou Ear",
      price: "$45.00"
    },
  ];
  const product3 = [
    {
      id: 1,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/17.jpg",
      title: "Panther Bracelet",
      price: "$100.00"
    },
    {
      id: 2,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg",
      title: "Diamond Band Ring",
      price: "$86.00"
    },
    {
      id: 3,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/18.jpg",
      title: "Sterling Silver Bead",
      price: "$80.00"
    },
    {
      id: 4,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/16.jpg",
      title: "Silvermist Bracelet",
      price: "$60.00"
    }
  ];
  const product4 = [
    {
      id: 5,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/5.jpg",
      title: "Lapis Hoop Earrings",
      price: "$115.00"
    },
    {
      id: 6,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg",
      title: "Diamond Band Ring",
      price: "$100.00"
    },
    {
      id: 7,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/3.jpg",
      title: "The World Jewelry",
      price: "$115.00"
    },
    {
      id: 8,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/1.jpg",
      title: "Sterling Silver Genuine",
      price: "$70.00"
    },
  ];
  return (
    <>
      <div className="ring-outer">
        <div className="container">
          <div className="ring-inner">
            <div className="ring-banner">
              <div className="ring-banner-inner">
                <img src="assets/image/ring-banner.jpg" alt="Ring Banner" />
                <div className="ring-banner-detail">
                  <p>beautiful</p>
                  <h3>Wedding Rings</h3>
                  <button>
                    <a href="#">Shop Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="ring-product">
              <div className="rings-type">
                <div className="ring-type-inner">
                  <div className="ring-header">
                    <h3>Featured Products</h3>
                  </div>
                  <div className="ring-slider">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={false}
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 1,
                        },
                        1600: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        {
                          product1 && product1.map((e) => {
                            return (
                              <>
                                <div className="ring">
                                  <div className="ring-img">
                                    <Link to={`/ring1/${e.id}`}>
                                      <img src={e.img} alt="Ring" />
                                    </Link>
                                  </div>
                                  <div className="ring-detail">
                                    <div className="ring-name">
                                      <Link to={`/ring1/${e.id}`}>
                                        {e.title}
                                      </Link>
                                    </div>
                                    <div className="ring-price">
                                      <span>{e.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </SwiperSlide>
                      <SwiperSlide>
                        {
                          product2 && product2.map((e) => {
                            return (
                              <>
                                <div className="ring">
                                  <div className="ring-img">
                                    <Link to={`/ring1/${e.id}`}>
                                      <img src={e.img} alt="Ring" />
                                    </Link>
                                  </div>
                                  <div className="ring-detail">
                                    <div className="ring-name">
                                      <Link to={`/ring1/${e.id}`}>
                                        {e.title}
                                      </Link>
                                    </div>
                                    <div className="ring-price">
                                      <span>{e.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                <div className="ring-type-inner">
                  <div className="ring-header">
                    <h3>Best Sellers</h3>
                  </div>
                  <div className="ring-slider">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={false}
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 1,
                        },
                        1600: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        {
                          product3 && product3.map((e) => {
                            return (
                              <>
                                <div className="ring">
                                  <div className="ring-img">
                                    <Link to={`/ring2/${e.id}`}>
                                      <img src={e.img} alt="Ring" />
                                    </Link>
                                  </div>
                                  <div className="ring-detail">
                                    <div className="ring-name">
                                      <Link to={`/ring2/${e.id}`}>
                                        {e.title}
                                      </Link>
                                    </div>
                                    <div className="ring-price">
                                      <span>{e.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </SwiperSlide>
                      <SwiperSlide>
                        {
                          product4 && product4.map((e) => {
                            return (
                              <>
                                <div className="ring">
                                  <div className="ring-img">
                                    <Link to={`/ring2/${e.id}`}>
                                      <img src={e.img} alt="Ring" />
                                    </Link>
                                  </div>
                                  <div className="ring-detail">
                                    <div className="ring-name">
                                      <Link to={`/ring2/${e.id}`}>
                                        {e.title}
                                      </Link>
                                    </div>
                                    <div className="ring-price">
                                      <span>{e.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ring;
