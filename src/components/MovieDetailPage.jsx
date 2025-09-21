import React, { useEffect, useState } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import Loading from "./Loading";
import { motion } from "motion/react"
import Recomandation from "./Recomandation";
const API_URL = `https://api.themoviedb.org/`;
 const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recomandation , setrecomandation] = useState([]);

  const fetchrecomandation = async (id) =>{
    const  res = await fetch(
      `${API_URL}3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = await res.json();
    setrecomandation(data.results);
  }
  useEffect(() => {
    const fetchMovie = async () => {
     
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
    fetchrecomandation(id)
  }, [id]);

  if (!movie) return <Loading />;

  const trailer =
    movie.videos.results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    ) || null;

  return (
    <div className="p-6 wrapper">
      <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
        ⬅ Back
      </Link>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Trailer Section */}
        <div className="flex-1 bg-gray-800 rounded-lg p-4">
          {trailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?modestbranding=1&rel=0`}
              title={movie.title}
              className="w-full h-64 lg:h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          ) : (
            <img
              className="w-full h-64 lg:h-full object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          )}
        </div>

        {/* Movie Details Section */}
        <div className="flex-1 bg-gray-800 rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
          <p className="italic text-gray-400 mb-4">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>
          <p>
            <span className="font-bold">Release:</span> {movie.release_date?.slice(0, 4)} &nbsp;
            <span className="font-bold">Rating:</span> {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
      <Routes>
       {/* related movies */}
       <Route path="/" element={<> 
       <motion.div  initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}   transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}  className="p-10 text-white rounded-lg">
        <h2>🔥Our Latest Collection</h2>
      <Recomandation recomandation={recomandation} posterUrl={'https://image.tmdb.org/t/p/w500'}/>
      </motion.div>
        </>}/>
          <Route path="/movie/:id" element={<MovieDetailPage/>} />
          </Routes>
    </div>

  );
};

export default MovieDetailPage;
