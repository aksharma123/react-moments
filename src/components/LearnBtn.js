import React from "react";
import "./LearnBtn.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const LearnBtn = ({ link, text }) => {
  return (
    <div className="learn_more_btn">
      <a href={link}>
        <span>{text}</span>
        {/* <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" /> */}
      </a>
    </div>
  );
};

export default LearnBtn;