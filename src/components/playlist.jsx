"use client";

import Slider from "react-slick";

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 2,
  speed: 500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        centerMode: true,
        centerPadding: "150px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: "56px",
        slidesToShow: 1,
      },
    },
  ],
};

export function Playlist() {
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className="text-left ">
          <div key={i} className="aspect-square bg-earth" />
          <h3 className="mt-3 text-bronze font-primary">Anathema - Thin Air</h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <audio controls className="w-full mt-3">
            <source src="thin-air.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </Slider>
  );
}
