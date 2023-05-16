import React from "react";
import course from "../images/course.png";
import time from "../images/time.png";
import scholarship from "../images/scholarship.png";
import noAds from "../images/noAds.png";
import live from "../images/live.png"

const InfoDiv = () => {
  return (
    <div className="infoDiv">
      <h1>
        Access curated courses worth <br />₹{" "}
        <span className="strike"> 18,500 </span> at just{" "}
        <span className="blue">₹ 99</span> per year!
      </h1>
      <div className="infoItems">
        <div>
          <img src={course} />
          <span className="blue"> 100+ </span> Job relevant courses
        </div>
        <div>
          <img src={time} />
          <span className="blue">20,000+ </span> Hours of content
        </div>
        <div>
          <img src={live} />
          <span className="blue">Exclusive</span> webinar access
        </div>
        <div>
          <img src={scholarship} />
          Scholarship worth <span className="blue">₹94,500 </span>
        </div>
        <div>
          <img src={noAds} />
          <span className="blue">Ad Free </span> learning experience
        </div>
      </div>
    </div>
  );
};

export default InfoDiv;
