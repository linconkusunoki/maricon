"use client";

import { useContext, useEffect, useRef, useState, createContext } from "react";
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

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [song, setSong] = useState();

  return (
    <MusicContext.Provider value={{ song, setSong }}>
      {children}
    </MusicContext.Provider>
  );
};

const AudioPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const { song, setSong } = useContext(MusicContext);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      setSong(url);
      // document.querySelectorAll("audio").forEach((el) => el.pause());
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (song !== url) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [song]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const updateDuration = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener("timeupdate", updateTime);
    audioElement.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src={url} className="hidden" />
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-6 h-6"
      >
        {isPlaying ? (
          <svg
            width="10"
            height="11"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16V0H5.35714V16H0Z"
              fill="#CB9470"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.64286 16V0H15V16H9.64286Z"
              fill="#CB9470"
            />
          </svg>
        ) : (
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.117432 13.6865V0.643433L10.325 7.44849L0.117432 13.6865Z"
              fill="#CB9470"
            />
          </svg>
        )}
      </button>
      <input
        type="range"
        value={currentTime}
        onChange={handleSeek}
        min="0"
        max={audioRef.current ? audioRef.current.duration : 0}
      />

      <p className="text-bronze text-[10px] text-nowrap">
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
    </div>
  );
};

export function Playlist() {
  return (
    <MusicProvider>
      <Slider {...settings}>
        <div className="text-left ">
          <div className="bg-[url('/thinair.jpeg')] aspect-[4/3] bg-cover bg-center" />
          <h3 className="mt-3 text-bronze font-primary">Thin Air - Anathema</h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <AudioPlayer url="thin-air.mp3" />
        </div>

        <div className="text-left ">
          <div className="bg-[url('/tangerina.jpg')] aspect-[4/3] bg-cover bg-center" />
          <h3 className="mt-3 text-bronze font-primary">
            Tangerina - Tiago Iorc
          </h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <AudioPlayer url="tangerina.mp3" />
        </div>

        <div className="text-left ">
          <div className="bg-[url('/unfurl.jpg')] aspect-[4/3] bg-cover bg-center" />
          <h3 className="mt-3 text-bronze font-primary">Unfurl - Katatonia</h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <AudioPlayer url="unfurl.mp3" />
        </div>

        <div className="text-left ">
          <div className="bg-[url('/sweaterweather.jpg')] aspect-[4/3] bg-cover bg-center" />
          <h3 className="mt-3 text-bronze font-primary">
            Sweater Weather - The Neighbourhood
          </h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <AudioPlayer url="sweaterweather.mp3" />
        </div>

        <div className="text-left ">
          <div className="bg-[url('/songbird.jpg')] aspect-[4/3] bg-cover bg-center" />
          <h3 className="mt-3 text-bronze font-primary">Songbird - Oasis</h3>
          <p className="text-xs font-primary text-bronze">
            Mari & Lincon / Our main songs
          </p>

          <AudioPlayer url="songbird.mp3" />
        </div>
      </Slider>
    </MusicProvider>
  );
}
