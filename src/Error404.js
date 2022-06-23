import React from 'react'
import { Link } from 'react-router-dom';

import Home from './Home'
import Login from './Login'
const Error404 = ({loggedIn}) => {
  console.log("ERRLOGIN",loggedIn)
  return (
    <div>
      <nav/>
        <h1 className='errorh1'>404 Error</h1>
         <h3 className='pgh3'>Page not found</h3>
     <div>{loggedIn ?  <Link to="/home" className='link'> Go to Home page</Link>:  <Link to="/login" className='link'>Go to Login page</Link>} 
     </div> 
  
    </div>
    
  )
}

export default Error404