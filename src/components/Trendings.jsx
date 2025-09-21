import React from 'react'
import Slider from 'react-slick';
 var settings = {
    dots: false,
    arrows: true,   
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };
function Trendings({trending,posterUrl}) {
  return (
     <Slider {...settings}>
         {trending.map((movie,index) => (
      <div className='trending' key={index}>
        <ul>
         
           <li key={index+1}>
            <p>
              {index+1}
            </p>
             <img src={`${posterUrl}${movie.poster_path}`} alt={movie.title} />
           </li>
         
        </ul>
      </div> ) )}
      
    </Slider>
  )
}

export default Trendings