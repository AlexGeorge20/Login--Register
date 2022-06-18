import React from 'react'
import {useNavigate} from 'react-router-dom';
const Home  = () => {
const navigate=useNavigate();

function handleClick(){
    navigate("/login")
    localStorage.removeItem("LoginCREDENTIAL")
}

  return (
    <div>
    <h1>Home page <h6>Hi,You are logged in</h6>
    
    <button onClick={handleClick} >Logout</button>
   
    </h1>

    </div>
    
   
  )
}

export default Home 