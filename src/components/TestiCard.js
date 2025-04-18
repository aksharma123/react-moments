import React from "react";
import mark from "../assets/MARKS.png";
import testicontent from "../assets/testi_content.png";
import testiratings from "../assets/testi_ratings.png";

const TestiCard = ({name , review}) => {
  return (
    <div class="testi_card">
      <div class="testi_image up">
        <img src={mark} alt="image" />
      </div>
      <div class="testi_content">
        <div class="testi_reviewer">
          <img src={testicontent} alt="" />
        </div>
        <div class="testi_name">{name}</div>
        <div class="testi_para">
          {review}
        </div>
        <div class="testi_reviewer">
          <img src={testiratings} alt="" />
        </div>
      </div>
      <div class="testi_image down">
        <img src={mark} alt="" />
      </div>
    </div>
  );
};

export default TestiCard;