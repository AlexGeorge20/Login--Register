import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import Home from './Home'
const Login = () => {
  let match;
  const [emailval, setEmailval] = useState("");
  const [pwdval, setPwdval] = useState("");
  const [errmsg, setErrmsg] = useState(false);

  const navigate=useNavigate();
  // const [loggedin,setLoggedin]=useState(false)
  // console.log("LOginEmail-",emailval);
  // console.log("LoginPwdval",pwdval);
const b=JSON.parse(localStorage.getItem('LoginCREDENTIAL') ) || []
const[logincred,setLoginCred]=useState(b);
  const getData = JSON.parse(localStorage.getItem("CREDENTIAL"));
  console.log("STORAGE",  getData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("LOginEmail-", emailval);
    console.log("LoginPwdval", pwdval);
    const loginData = { email: emailval, password: pwdval };
    console.log("LOGINDATA", loginData.email,loginData.password);
    logincred.push({"email":emailval,"password":emailval})
    setLoginCred(logincred)
console.log("LOGIN creD",logincred);
localStorage.setItem('LoginCREDENTIAL',JSON.stringify(logincred))

    match = getData.filter(
      (ele) =>
        ele.email === loginData.email && ele.password === loginData.password
    );
    if (match.length > 0) {
      // setErrmsg(errmsg);
      console.log("MATCH", match);
      navigate("/home",{replace:true})
      console.log("Pg replaced");

      // setLoggedin(!loggedin)
    } else {
      console.log("NO MATCH");
      setErrmsg(!errmsg);
      console.log("errormsgfn", errmsg);
    }
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          placeholder="Enter Email.."
          type="email"
          id="email1"
          onBlur={(e) => {
            setEmailval(e.target.value);
          }}
          required
        />
        <label for="password">Password</label>
        <input
          placeholder="Enter Password"
          type="password"
          id="pwd1"
          onBlur={(e) => {
            setPwdval(e.target.value);
          }}
          required
        />
        <button type="submit">Login</button>
       
      </form>
      <div className={`${errmsg ? "show" : "hide"}`}>
        CREDENTIALS DOES NOT MATCH
      </div>
      <Link to="/register" className="link">
         Register Here
      </Link>
      
    </div>
  );
};

export default Login;
