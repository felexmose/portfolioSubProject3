
import {useState} from 'react';
import { login } from "../services/UserService";
import {Link} from 'react-router-dom';
import {UserModel} from "../models/UserModel";



const Login =() => {
    // States for registration
  //const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  // const handleName = (e) => {
  //   setName(e.target.value);
  //   setSubmitted(false);
  // };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError(true);
    } else {
      console.log('111111111');
      const userCreds = new UserModel(email,password);
      //const userCreds = {Email:email, passwordHash:password};
      console.log('22222222');
      login(userCreds).then(response => {
        //setMovies(response);
        console.log(response);
    });

      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User successfully logged in!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>Login</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>      
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
          
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
          
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <br/>
        <Link  to='/signup'>Sign-up now</Link>
      </form>
    </div>
  );
}

export default Login;








// import Container from "react-bootstrap/esm/Container";

// const Login = () => {
//     return (
//         <Container>
//             <form>
//           <h3>Sign Up</h3>
//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//             />
//           </div>
//           <div className="mb-3">
//             <label>Last name</label>
//             <input type="text" className="form-control" placeholder="Last name" />
//           </div>
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/sign-in">sign in?</a>
//           </p>
//         </form>
//         </Container>
//       )
// };

// export default Login;