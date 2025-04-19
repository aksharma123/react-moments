import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './BannerSlider.css'; 
import lineImage from '../assets/Line 8.png'; 


const BannerSlider = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
  };

  return (
    <section className="banner_main">
      <OwlCarousel className="owl-theme" {...options}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="container">
            <div className="slide_contant">
              <h2>RESIDENCE</h2>
              <p>
                Introduction <span>Quickly and</span> easily generate Lorem Ipsum placeholder text.
                Select <span>the number</span> of characters
              </p>
              {/* <a href="#next-section" className="bannerDownIcon">
                <i className="fa-solid fa-arrow-down"></i>
              </a> */}
            </div>
          </div>
          <div className="slide_images">
            <div className="image1"></div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide slide_two">
          <div className="container">
            <div className="slide_contant">
              <h2>RESIDENCE</h2>
              <p>
                Introduction <span>Quickly and</span> easily generate Lorem Ipsum placeholder text.
                Select <span>the number</span> of characters
              </p>
              {/* <a href="#next-section" className="bannerDownIcon">
                <i className="fa-solid fa-arrow-down"></i>
              </a> */}
            </div>
          </div>
          <div className="slide_images">
            <div className="image1 bannerImg2"></div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide slide_three">
          <div className="container">
            <div className="slide_contant">
              <h2>RESIDENCE</h2>
              <p>
                Introduction <span>Quickly and</span> easily generate Lorem Ipsum placeholder text.
                Select <span>the number</span> of characters
              </p>
              {/* <a href="#next-section" className="bannerDownIcon">
                <i className="fa-solid fa-arrow-down"></i>
              </a> */}
            </div>
          </div>
          <div className="slide_images">
            <div className="image1 bannerImg3"></div>
          </div>
        </div>
      </OwlCarousel>

      {/* Static Right Side */}
      <div className="right_image">
        <div className="image2">
          <img src={lineImage} alt="Line" />
          <div className="schedule_call">
            <a href="contact.html">Schedule a call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
