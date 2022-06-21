
import './App.css';
import Login from './Login'
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error404 from './Error404';
import { useState } from 'react';
function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  console.log("SETLOggedIn",loggedIn);

  return (
    <Router>
      <div className="App">
       <Routes>
      {  loggedIn===undefined }


         { loggedIn && (<>
            <Route path='/home'  element={<Home setLoggedIn={setLoggedIn}/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route  path="*"  element={<Error404/>} />  */}
            </>
)}
{!loggedIn && (   <>         
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
