import {Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Actors from './pages/Actors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainHeader from './components/MainHeader';
import MovieDetail from './pages/MovieDetail';
import {Container, Row, Col }from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div>
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <MainHeader/>
            </Col>
          </Row>
          <Row>
            <Col lg={1} md={3} sm={4} xs={12} >
              <LeftSideBar/>
            </Col>
            <Col lg={10} md={6} sm={4} xs={12}>
              <div className='middleDiv'>
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
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/signup'>
                    <Signup />
                  </Route>
                  <Route path='/movie-detail/:movieId'>
                    <MovieDetail />
                  </Route>
                </main>
            </div>
            </Col>
            <Col lg={1} md={3} sm={4} xs={12}>
              <RightSideBar/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;


{/* <Container fluid>
      <div>
      <MainHeader/>
      <div className='div1'>
        <div className='leftBarDiv'>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
          <p>leftsidebar</p>
        </div>
        <div>
          <div></div>
          <div className='middleDiv'>
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
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/movie-detail/:movieId'>
                <MovieDetail />
              </Route>
            </main>
          </div>
        </div>
        <div className='rightBarDiv'>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
          <p>rightsidebar</p>
        </div>
      </div>
    </div>
    </Container> */}