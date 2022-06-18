// import './App.css';
import { Link } from 'react-router-dom';
 import Nav from './nav';
function About() {
  return (
    <div className="App">
       <Nav />
      <span className='text-button'>
      <h1>About page</h1>
      <Link to="/home" className='link'>To Home page</Link>
      </span>
    
    </div>
  );
}

export default About;
