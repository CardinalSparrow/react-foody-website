import React from "react";
import "./DoYouPrefer.css";
import chef0 from "../Assets/Chef0.png";
const DoYouPrefer = () => {
  return (
    <div className="do-you-prefer">
      <div className="prefer-image-text">
        <div className="prefer-image">
          <img src={chef0} alt="" />
        </div>
        <div className="prefer-text">
          <h1>
            Do You Prefer <span>Our Food?</span>
          </h1>
          <h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            harum culpa beatae voluptates optio dicta tempore reiciendis
            accusamus molestias perspiciatis.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DoYouPrefer;
