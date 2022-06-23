import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import Home from './Home'

const Login = ({setLoggedIn}) => {
  let match;
  const [emailval, setEmailval] = useState("");
  const [pwdval, setPwdval] = useState("");
  const [errmsg, setErrmsg] = useState(false);
    let logincredential=[]

  const navigate=useNavigate();
  // const [loggedin,setLoggedin]=useState(false)
  // console.log("LOginEmail-",emailval);
  // console.log("LoginPwdval",pwdval);
// const b=JSON.parse(localStorage.getItem('LoginCREDENTIAL') ) || []
// const[logincred,setLoginCred]=useState('');
  const getData = JSON.parse(localStorage.getItem("CREDENTIAL"));
  console.log("STORAGE",  getData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("LOginEmail-", emailval);
    console.log("LoginPwdval", pwdval);
    const loginData = { email: emailval, password: pwdval };
    console.log("LOGINDATA", loginData.email,loginData.password);
    // logincred.push({"email":emailval,"password":emailval})
    // setLoginCred(logincred)
// console.log("LOGIN creD",logincred);
// localStorage.setItem('LoginCREDENTIAL',JSON.stringify(logincred))


    match = getData.filter(
      (ele) =>
        ele.email === loginData.email && ele.password === loginData.password
    );
    if (match.length > 0) {
      // setErrmsg(errmsg);
      console.log("MATCH", match);
  // to prevent going back to prev pg on back btn
      navigate("/home",{replace:true})
      setLoggedIn(true)
      // console.log("SETLOggedIn",loggedIn);
      console.log("Pg replaced");
      logincredential.push({"email":emailval,"password":pwdval})
      localStorage.setItem('LoginCREDENTIAL',JSON.stringify(logincredential))
     
    } else {
      console.log("NO MATCH");
      setErrmsg(!errmsg);
      console.log("errormsgfn", errmsg);
    }
    
     }

    
  return (
    <div className="">
      <h1 className="login">Login</h1>
      <div className="form">
      <form onSubmit={handleSubmit} className='form'>
       <div className="form-div">
       <label className="form-label" for="email">Email</label>
        <input
         className="form-input"
          placeholder="Enter Email.."
          type="email"
          id="email1"
          onBlur={(e) => {
            setEmailval(e.target.value);
          }}
          required
        />

       </div>
        <div className="form-div">
        <label className="form-label" for="password">Password</label>
        <input
        className="form-input"
          placeholder="Enter Password"
          type="password"
          id="pwd1"
          onBlur={(e) => {
            setPwdval(e.target.value);
          }}
          required
        />

        </div>
       
        <button className="btn" type="submit">Login</button>
       
      </form>
      <div className={`${errmsg ? "show" : "hide"}`}>
        CREDENTIALS DOES NOT MATCH
      </div>
    
      </div>
     <div className="reg-btn">
        <Link to="/register" className="link">
            Register Here
          </Link>
      
     </div>
     
    </div>
  );
};

export default Login;
