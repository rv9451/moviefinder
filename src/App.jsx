import { useState,useEffect, use } from 'react'
import './App.css'
import Search from './components/Search'
import MoviesCard from './components/MoviesCard';

const API_URL = `https://api.themoviedb.org/`;
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg5M2MwMjM2ZTM3NWJiZGVmMmM0YmFlNGNmYmE3MiIsIm5iZiI6MTc1Nzc4ODYxMy43MjgsInN1YiI6IjY4YzViOWM1Y2JiZjRhZmI2OWEyZDExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RIL6KRYu9MS8j3QBxlKBlLTR4VNDsw-p4oFtQ3qNhxA'
  }
};
  
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
 

 const [movies, setMovies] = useState([]);
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
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
   useEffect(()=>{
    fetchmovies('');
   },['']);

  
  return (
    <>
     <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Heroes Banner" className='logo'/>
          <h1>Find <span className='text-gradient'> Movies </span>You'll Enjoy Without The Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={fetchmovies} />
      </div>
      <section className='all-movies'>
      <h1>🎬 Movie Explorer</h1>
    <ul>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
     
    </section>
  
     </main>
    </>
  )
}

export default App
