import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Teams from "./Pages/Teams";
import Reports from "./Pages/Reports";
import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
