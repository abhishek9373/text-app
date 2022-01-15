import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const [alert, setalert] = useState(null)
  const changemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = "white"
      showalert('Light mode is Enabled', 'success')
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = "#0c2947"
      document.body.style.Color = "white"
      showalert('dark mode is Enabled', 'success')
    }
  }
  const [mode, setmode] = useState('light')
  return (
    <>
      <Router>
          <Navbar title="TextPro" mode={mode} changemode={changemode} />
          <Alert alert={alert} />
          <div className="container">
          <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Textform mode={mode} showalert={showalert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
