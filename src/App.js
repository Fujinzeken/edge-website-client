import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact/Contact";
import Courses from "./pages/Courses/Courses";
import Navbar from "./components/navbar/Navbar";
import Elearn from "./pages/E-learn/Elearn";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Classes from "./pages/classes/Classes";
import { useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";
import CourseDetails from "./components/courseDetails/CourseDetails";
//import {useState} from 'react'

function App() {
  const { loading } = useContext(AuthProvider);
  return (
    <div className="App">
      <Router>
        {loading && <Loader />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/e-learn" element={<Elearn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/e-learn/class/:id" element={<Classes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
