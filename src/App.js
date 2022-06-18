
import './App.css';
import Login from './Login'
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { useState } from 'react';
import Home from './Home';

function App() {
  
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>

     </div>
    </Router>
    
  );
}

export default App;
