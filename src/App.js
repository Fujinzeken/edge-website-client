import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Contact from "./pages/contact/Contact";
import Courses from "./pages/Courses/Courses";
import Navbar from "./components/navbar/Navbar";
import Elearn from "./pages/E-learn/Elearn";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Classes from "./pages/classes/Classes";
//import {useState} from 'react'

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/courses" element={ <Courses />} />
          <Route path="/e-learn" element={ <Elearn />} />
          <Route path="/about" element={ <AboutUs />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/e-learn/class/:id" element={ <Classes />} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
