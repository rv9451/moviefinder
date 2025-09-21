import React from 'react'
import { Link } from 'react-router-dom';
const posterUrl = `https://image.tmdb.org/t/p/w500`;
function MoviesCard({movie:{id,title,poster_path,runtimeMinutes,release_date,original_language,vote_average}}) {
  return (
    <Link to={`/movie/${id}`} >
      <div className="movie-card">
        {poster_path?(
      <img src={`${posterUrl}${poster_path}`} alt={title} />
        ):(
        <img src="./noimage.png" alt="Default Thumbnail"/>
        )}
      <div className='mt-4'>
      <h3>{title}</h3>
      <div className='content'>
        <div className='rating'>
            <img src="./start.png" alt="Star Icon" />
            <span>{vote_average.toFixed(1) ??"N/A"}</span>
        </div>
        <span>.</span>
        <p className='lang'>{original_language??''}</p>
        <span>.</span>
        <p className='year'>{release_date?.slice(0, 4)}</p>
        
      </div>
      </div>
      </div>
    </Link>
  )
}

export default MoviesCard