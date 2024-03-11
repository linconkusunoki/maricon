"use client";

import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "56px",
  slidesToShow: 1,
  speed: 500,
  dots: false,
  arrows: false,
};

export function Playlist() {
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className="text-left ">
          <div key={i} className="w-full h-44 bg-beige" />
          <h3 className="mt-3 text-bronze font-primary">Anathema - Thin Air</h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <audio controls className="mt-3">
            <source src="thin-air.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </Slider>
  );
}
