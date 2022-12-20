import React, {useState} from "react";
import Scroll from '../components/Scroll';
import SearchList from '../components/SearchList';
import { getMoviesBySubstring } from "../services/MovieService";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('');

    const handleChange = (event) => {
        setKeyword(event.target.value);
      };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            setKeyword(keyword);
            console.log('the keyword:'+ keyword);

            getMoviesBySubstring(keyword).then(response => {
                setMovies(response);
                console.log(response);
            });

            // fetch('http://localhost:5001/api/movies/substring/'+keyword).then(response => {
            // return response.json();
            // }).then(data => {
            //     setMovies(data);
            //     console.log(data);
            // });
        }
    };

    function searchList() {
        return (
          <Scroll>
            <SearchList filteredMovies={movies} />
          </Scroll>
        );
      }

    return (
        <section>            
            <div>
                <input type="text" id="keyword" placeholder="Search movie" onChange={handleChange} onKeyDown={handleKeyDown}/>                
            </div>
            {searchList()}
        </section>        
    ); 
};

export default Movies;