import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import './App.css';
function Nav() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/login")
        localStorage.removeItem("LoginCREDENTIAL")
    }
  return (
    <nav className='nav-links'>

<ul className='nav-links'>
    <li><a href="/home" className='nav-btn'>Home</a></li>
    <li ><a href="/about" className='nav-btn'>About</a></li>

</ul>
<button onClick={handleClick} className='logoutbtn' >Logout</button>
    </nav>
  );
}

export default Nav;