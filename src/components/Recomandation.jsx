import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024, // For tablets
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // For mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Recomandation({ recomandation, posterUrl }) {
  return (
    <Slider {...settings}>
      {recomandation.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={movie.id || index}>
        <div
          className="p-2"
          key={movie.id || index}
        >
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <img
              className="w-full h-64 object-cover"
              src={`${posterUrl}${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
            />
            <div className="p-4 text-center text-white">
              <h3 className="text-lg font-bold truncate">{movie.title || "Untitled"}</h3>
              {movie.vote_average && (
                <p className="text-yellow-400 mt-2">⭐ {movie.vote_average.toFixed(1)}</p>
              )}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </Slider>
  );
}

export default Recomandation;