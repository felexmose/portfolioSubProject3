import React, {useState} from "react";
import Scroll from '../components/Scroll';
import ActorSearchList from '../components/ActorSearchList';
import { getAllActors} from "../services/ActorService";

const Actors = () => {
    const [actors, setActors] = useState([]);
    // const [keyword, setKeyword] = useState('');

    // const handleChange = (event) => {
    //     setKeyword(event.target.value);
    //   };

    // const handleKeyDown = (event) => {
    //     if(event.key === 'Enter'){
    //         setKeyword(keyword);
    //         console.log('the keyword:'+ keyword);

            getAllActors().then(response => {
                setActors(response);
                console.log(response);
            });

            // fetch('http://localhost:5001/api/movies/substring/'+keyword).then(response => {
            // return response.json();
            // }).then(data => {
            //     setMovies(data);
            //     console.log(data);
            // });
       // }
    //};

    function actorSearchList() {
        return (
          <Scroll>
            <ActorSearchList filteredActors={actors} />
          </Scroll>
        );
      }

    return (
        <section>          
            
            {actorSearchList()}
        </section>        
    ); 
};

export default Actors;