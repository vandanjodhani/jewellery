import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const text = [
    <h4>Nam liber tempor cum soluta nobis eleifend option.</h4>,
    <p>
      Congue nihil imperdiet doming id quod mazim placerat facer possim assum.
      Typi non habent claritatem insitam est usus legentis in iis qui facit
      eorum claritatem. Investigationes demonstraverunt lectores legere me.
    </p>,
    <p>
      Claritas est etiam processus dynamicus, qui sequitur mutationem
      consuetudium lectorum.
    </p>,
  ];
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Fast Free Delivery",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "More Than 30 Years In The Business",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "100% Organic Foods",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Best Shopping Strategies",
      children: <p>{text}</p>,
    }
  ];
  return (
    <>
      <div className="about-heading-outer">
        <div className="container">
          <div className="about-heading-inner">
            <h2>About Us</h2>
            <div className="about-heading-txt">
              <span>
                <Link to="/">Home</Link>
              </span>
              <span>&gt;</span>
              <span className="about-is">About Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <img
          src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/about-us-banner1.jpg"
          alt="Modern office building with glass facade"
          className="header-image"
        />

        <div className="header-content">
          <h1 className="headline">
            We Are A Digital Agency Focused On Delivering Content And Utility
            User-Experiences.
          </h1>

          <p className="description">
            Adipiscing lacus ut elementum, nec duis, tempor litora turpis
            dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
            eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
            pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi
            mauris, elit sodales leo sodales accumsan. Iaculis ac fringilla
            torquent lorem consectetur, sociis phasellus risus urna aliquam,
            ornare.
          </p>

          <img
            src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/about-us-signature.png"
            alt="Signature"
            className="signature"
          />
        </div>
      </div>
      <div className="feature-main">
        <section className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                  <path d="M14 15l3 3m0 0l3-3m-3 3V9"></path>
                </svg>
              </div>
              <h3 className="feature-title">Creative Design</h3>
              <p className="feature-description">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M8 14l-1.5 2"></path>
                </svg>
              </div>
              <h3 className="feature-title">100% Money Back Guarantee</h3>
              <p className="feature-description">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M17 11h.01M21 15h.01"></path>
                </svg>
              </div>
              <h3 className="feature-title">Online Support 24/7</h3>
              <p className="feature-description">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mission-outer">
        <section className="container">
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-image">
                <img
                  src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/about-us-banner2-1.jpg"
                  alt="Team planning with sticky notes"
                />
              </div>
              <h3 className="mission-title">What Do We Do?</h3>
              <p className="mission-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-image">
                <img
                  src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/about-us-banner2-2.jpg"
                  alt="Vision spelled with wooden letter tiles"
                />
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-image">
                <img
                  src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/about-us-banner2-3.jpg"
                  alt="Business meeting with sticky notes on board"
                />
              </div>
              <h3 className="mission-title">History Of Us</h3>
              <p className="mission-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="about-detail">
        <div class="container">
          <div className="main-content">
            <div className="left-section">
              <h2 className="section-title">Why You Choose Us?</h2>
              <p className="section-subtitle">
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram anteposuerit litterarum.
              </p>

              <div className="feature-box">
                <Collapse accordion items={items} defaultActiveKey={["1"]}/>
              </div>
            </div>

            <div className="right-section">
              <h2 className="section-title">What Clients Say</h2>
              <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img
                        src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/04/testimonial3-270x270.jpg"
                        alt="client"
                      />
                    </div>
                    <div className="testimonial-quote">
                      All Perfect !! I have three sites with magento, this theme
                      is the best !! Excellent support, advice theme
                      installation package, sorry for English, are Italian but I
                      had no problem !! Thank you !
                    </div>
                    <div className="testimonial-author">KATHY YOUNG</div>
                    <div className="testimonial-position">CEO of SunPark</div>
                  </div>
                  <div className="dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img
                        src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/04/testimonial1-150x150.jpg"
                        alt="client"
                      />
                    </div>
                    <div className="testimonial-quote">
                      All Perfect !! I have three sites with magento, this theme
                      is the best !! Excellent support, advice theme
                      installation package, sorry for English, are Italian but I
                      had no problem !! Thank you !
                    </div>
                    <div className="testimonial-author">JENIFER BROWN</div>
                    <div className="testimonial-position">Manager of AZ</div>
                  </div>
                  <div className="dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="activate-window">
          Activate Window
          <br />
          Go to Settings to activ
        </div>
      </div>
    </>
  );
};

export default About;
