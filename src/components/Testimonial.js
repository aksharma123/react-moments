import React from "react";
import "./Testimonial.css";
import TestiCard from "./TestiCard";

const Testimonial = () => {
  return (
    <section class="testimonials_section">
      <div class="testimonials_content">
        <div class="demo_text">
          <p>TESTIMONIALS</p>
          <h3>
            What <span>say</span> our clients
          </h3>
          <div class="testi_slider">
            <div class="testi_cards">
              <TestiCard
                name="JOHN SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="PINTU SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="LAKHAN SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="ASHOK SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="BHOLA SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="BHARGAV SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="BOBBY SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="BITTU SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
              <TestiCard
                name="VIKASH SNOW"
                review="Quickly and easily generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
