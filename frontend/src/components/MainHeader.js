import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';
//import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainHeader = () => {
    return (
        
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/movies'>Movies</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/actors'>Actors</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/login'>Login</NavLink>
                </li>
            </ul>
            
        </nav>
    </header>
         
    
    );
};

export default MainHeader;