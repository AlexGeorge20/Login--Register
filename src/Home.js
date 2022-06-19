import React from 'react'
import {useNavigate} from 'react-router-dom';
import Nav from './nav';
import { Link } from 'react-router-dom';

const Home  = () => {
const navigate=useNavigate();

// function handleClick(){
//     navigate("/login")
//     localStorage.removeItem("LoginCREDENTIAL")
// }

  return (
    <div>
      <Nav />
    <h1>Home page <h6>Hi,You are logged in</h6>
    </h1>
    <div className='abt-btn'>
    {/* <button onClick={handleClick} className='logoutbtn' >Logout</button> */}

      <Link to="/about" className='link'>To About page</Link>
      </div>
    </div>
    
   
  )
}

export default Home 