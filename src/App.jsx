import { useState,useEffect, use } from 'react'
import './App.css'
import Search from './components/Search'
import MoviesCard from './components/MoviesCard';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import Trendings from './components/Trendings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"
import { Route, Router, Routes } from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import heroImg from './assets/hero-img.png'

const API_URL = `https://api.themoviedb.org/`;
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg5M2MwMjM2ZTM3NWJiZGVmMmM0YmFlNGNmYmE3MiIsIm5iZiI6MTc1Nzc4ODYxMy43MjgsInN1YiI6IjY4YzViOWM1Y2JiZjRhZmI2OWEyZDExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RIL6KRYu9MS8j3QBxlKBlLTR4VNDsw-p4oFtQ3qNhxA'
  }
};
const posterUrl = `https://image.tmdb.org/t/p/w500`;
  
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading,setloading] = useState(true);

 const [movies, setMovies] = useState([]);
 const [trending, setTrending] = useState([]);
 const fetchtrending = async () =>{
  try {
    const response = await fetch(`${API_URL}3/trending/all/day?api_key=`+import.meta.env.VITE_TMDB_API_KEY);
    if(response.ok){
      const data = await response.json();
      setTrending(data.results);
    }else{
      console.log('Error fetching trending movies');
    }
  } catch (error) {
    console.log(error);
    
  }
 }
 const fetchmovies = async (searchTerm) => {
    try {
      const endpoint = searchTerm
        ? `${API_URL}3/search/movie?language=hi-IN&query=${encodeURIComponent(searchTerm)}&page=1`
        : `${API_URL}3/discover/movie?language=en-US&page=1`;
      const response = await fetch(endpoint, { headers: options.headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setloading(false);
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
   useEffect(()=>{
    fetchmovies('');
    fetchtrending()
   },['']);

  
  return (
   
     <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src={heroImg} alt="Heroes Banner" className='logo'/>
          <h1>Find <span className='text-gradient'> Movies </span>You'll Enjoy Without The Hassle</h1>
        </header>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={fetchmovies} />
      </div>
      <Routes>
        <Route path='/' element={<>
      <motion.div  initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}   transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}  className="p-10 text-white rounded-lg">
        <h2>🔥 Trending Movies & TV Shows</h2>
      <Trendings trending={trending} posterUrl={posterUrl}/>
      </motion.div>
      {/* moview lis cards  */}
  
      <section className='all-movies'>
      <h1>🎬 Movie Explorer</h1>
      {isLoading ?(
        <Loading/>
      ):''}
    <ul>
      {movies.map((movie) => (
            <motion.div  initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}   transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}  className="p-10 text-white rounded-lg">
       <MoviesCard key={movie.id} movie={movie} />
      </motion.div>
        
      ))}
    </ul>
    {movies.length === 0 && !isLoading ? (
     
       <NotFound/>
     
    ) : (
      ''
    ) }
     
    </section></>}/>
     <Route path="/movie/:id" element={<MovieDetailPage/>} />
  </Routes>
     </main>
    
  )
}

export default App
