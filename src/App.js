import * as React from "react";
// import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
