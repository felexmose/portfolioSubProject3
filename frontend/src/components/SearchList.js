import React from 'react';
import MovieCard from '../components/MovieCard';

function SearchList({ filteredMovies }) {
  const filtered = filteredMovies.map(movie =>  <MovieCard key={movie.id} movie={movie} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;