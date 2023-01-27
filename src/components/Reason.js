import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

const Reason = () => {
  return (
    <div className="reason" id="reason">
      <div className="reason__left">
        <img src={image1} alt="image1" />

        <img src={image2} alt="image2" />

        <img src={image3} alt="image3" />

        <img src={image4} alt="image4" />
      </div>

      <div className="reason__right">
        <div className="reason__describe">
          <span>SOME REASONS</span>
        </div>

        <div className="reason__title">
          <span>WHY</span>

          <span> CHOOSE US?</span>
        </div>

        <div className="reason__details">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>

          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>

          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <div className="reason__partners">
          <span>OUR PARTNERS</span>

          <div>
            <img src={nb} alt="nb" />

            <img src={adidas} alt="adidas" />

            <img src={nike} alt="nike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
