import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
// import Login from './Login';
const Register = () => {

  const[emailReg,setEmailReg]=useState('');
  const[pwdReg,setPwdReg]=useState('');
  const a= JSON.parse(localStorage.getItem('CREDENTIAL') ) || []
  const[cred,setCred]=useState(a);
  // const[cred,setCred]=useState([]);
  // const getData=JSON.parse(localStorage.getItem('CREDENTIAL'))

  console.log('Emailreg',emailReg);
  console.log('Pwdreg',pwdReg);
  // console.log("GETData",getData);
console.log("RERENDER");

function handleSubmit(e){
   e.preventDefault();
   cred.push({"email":emailReg,"password":pwdReg})
   setCred(cred)

  //  console.log("CRED Array?",Array.isArray(cred));
    console.log("CRED", cred);
    localStorage.setItem('CREDENTIAL',JSON.stringify(cred))
    // let a= JSON.parse(localStorage.getItem('CREDENTIAL'))
    // //a is String
    console.log('LoCAlstorge Reg cred',cred);
    }
    
  return (
    <div className='register'>
  <h1>Register</h1>
<form onSubmit={handleSubmit}>
        <label for='email'>Email</label>
        <input placeholder='Enter Email..' type='email' id='email1'
        onBlur={(e)=>{setEmailReg(e.target.value)}}/>
        <label for='password'>Password</label>
        <input placeholder='Enter Password' type='password' id='pwd1'
        onBlur={(e)=>{setPwdReg(e.target.value)}}/>

    <button>Register</button>
      </form>
      <Link to="/login" className='link' > Login Here</Link>
     
    </div>
  
  )
}
export default Register