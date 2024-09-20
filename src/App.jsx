import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Project";
import Interests from "./components/skills/Interests";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience"; 
import { EducationSection } from "./components/education/Education";

export default function App() {
  return (
    <Router>
      <div className="text-white bg-background-black body-font min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
