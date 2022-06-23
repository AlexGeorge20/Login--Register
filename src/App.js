
import './App.css';
import Login from './Login'
import Register from './Register';
import {useEffect, useState} from 'react' 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error404 from './Error404';
import Loadingpg from './Loadingpg';
import { Navigate } from 'react-router-dom';
function App() {
  

  const [loggedIn,setLoggedIn]=useState(null);
  console.log("SETLOggedIn",loggedIn);

useEffect(()=>{
  const b=JSON.parse(localStorage.getItem('LoginCREDENTIAL') ) 
  if(b!=null){
    // b.length>0  ? setLoggedIn(true): setLoggedIn(false)
    setLoggedIn(true)
    console.log("RerenderSTORage to true");
  }else{
    setLoggedIn(false)
    console.log("RerenderSTORage to false");
  }
},[loggedIn])



  return (
    <Router>
      <div className="App">
       <Routes>
      {/* {  loggedIn===undefined && <Loadingpg/> } */}


      { loggedIn && (<>
            <Route path='/home'  element={<Home setLoggedIn={setLoggedIn}/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route  path="*"  element={<Error404/>} />  */}
            </>
)}
{(!loggedIn) && (<>         
   <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />}/>
              <Route path='/register' element={<Register/>}/>
              {/* <Route  path="*"  element={<Error404/>} />  */}
              </> 
)}


 <Route  path="*"  element={<Error404/>} /> 
       </Routes>
       
                 
     </div>
    </Router>
    
  );
}

export default App;
