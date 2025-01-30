import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from "./Pages/Home"
import Success from "./Pages/Suceess"
import NotFound from "./Pages/NotFound"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/success" element = {<Success/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </div>
  )
}

export default App
