import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* Images */
import Images1 from "./images/1.jpg";
import Images2 from "./images/2.jpg";
import Images3 from "./images/3.jpg";

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const JumbotronImage = () => {
  return (
    <div className="ml-[150px]">
      <Slider {...settings}>
        <div>
          <img src={Images1} alt="Image 1" />
        </div>
        <div>
          <img src={Images2} alt="Image 2" />
        </div>
        <div>
          <img src={Images3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default JumbotronImage;
