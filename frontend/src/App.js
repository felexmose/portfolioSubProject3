import {Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Actors from './pages/Actors';
import MainHeader from './components/MainHeader';
import MovieDetail from './pages/MovieDetail';
import "./App.css";

function App() {
  return (
    <div>
      <MainHeader/>
      <div>
        <div></div>
        <div>
          <div></div>
          <div>
            <main>
              <Route path="/" exact>
                <Redirect to='/home'/>
              </Route>
              <Route path="/home">
               <Home />
              </Route>
              <Route path='/movies'>
                <Movies />
              </Route>
              <Route path='/actors'>
                <Actors />
              </Route>
              <Route path='/movie-detail/:movieId'>
                <MovieDetail />
              </Route>
            </main>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
