import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BoxBarang = () => {
  return (
    <div class="grid grid-cols-4 gap-4 text-center h-[80px]">
      <div className="border-2 rounded-lg">1</div>
      <div className="border-2 rounded-lg">2</div>
      <div className="border-2 rounded-lg">3</div>
      <div className="border-2 rounded-lg">4</div>
    </div>
  );
};

export default BoxBarang;
