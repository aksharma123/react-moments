import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowDown } from "react-icons/fa6";
import "./BannerSlider.css";
import line from "../assets/Line 8.png";

const BannerSlider = () => {
  return (
    <section className="banner_main">
      <div className="banner_slider">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={1100}
        >
          {/* Slide 1 */}
          <div className="swiper_pagination">
            <SwiperSlide>
              <div className="slide">
                <div className="container">
                  <div className="slide_content">
                    <h2>RESIDENCE</h2>
                    <p>
                      Introduction <span>Quickly and</span> easily generate
                      Lorem Ipsum placeholder text. Select{" "}
                      <span>the number</span> of characters
                    </p>
                    <a href="#next-section" className="bannerDownIcon">
                      <FaArrowDown />
                    </a>
                  </div>
                </div>
                <div className="slide_images">
                  <div className="image1"></div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="slide slide_two">
                <div className="container">
                  <div className="slide_content">
                    <h2>RESIDENCE</h2>
                    <p>
                      Introduction <span>Quickly and</span> easily generate
                      Lorem Ipsum placeholder text. Select{" "}
                      <span>the number</span> of characters
                    </p>
                    <a href="#next-section" className="bannerDownIcon">
                      <FaArrowDown />
                    </a>
                  </div>
                </div>
                <div className="slide_images">
                  <div className="image1 bannerImg2"></div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="slide slide_three">
                <div className="container">
                  <div className="slide_content">
                    <h2>RESIDENCE</h2>
                    <p>
                      Introduction <span>Quickly and</span> easily generate
                      Lorem Ipsum placeholder text. Select{" "}
                      <span>the number</span> of characters
                    </p>
                    <a href="#next-section" className="bannerDownIcon">
                      <FaArrowDown />
                    </a>
                  </div>
                </div>
                <div className="slide_images">
                  <div className="image1 bannerImg3"></div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* Right Side Schedule Call */}
      <div className="right_image">
        <div className="image2">
          <img src={line} alt="Decorative Line" />
          <div className="schedule_call">
            <a href="contact.html">Schedule a call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
