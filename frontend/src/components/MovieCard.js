import React from 'react';

function MovieCard({movie}) {
  return(
    <div className="box">     
      <div>
        <h2>{movie.primaryTitle}</h2>
        <p>{movie.startYear}</p>
        <p>{movie.genres}</p>
      </div>
    </div>
  );
}

export default MovieCard;