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
    <div className=''>
  <h1 className='register'>Register</h1>
<div className='form'>
<form onSubmit={handleSubmit} className='form'>
        
        <div className='form-div'>
        <label className='form-label' for='email'>Email</label>
        <input className='form-input' placeholder='Enter Email..' type='email' id='email1'
        onBlur={(e)=>{setEmailReg(e.target.value)}}/>
        </div>
        <div className='form-div'>
        <label className='form-label' for='password'>Password</label>
        <input className='form-input' placeholder='Enter Password' type='password' id='pwd1'
        onBlur={(e)=>{setPwdReg(e.target.value)}}/>
         </div>
    <button className='btn'>Register</button>
      </form>
</div>


      
      <div className='reg-btn'>
      <Link to="/login" className='link' > Login Here</Link>

      </div>
     
    </div>
  
  )
}
export default Register