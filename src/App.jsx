import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import SkillsInterests from "./pages/skills/SkillsInterests";
import Navbar from "./components/navbar/Navbar";
import GalaxyAnimation from "./components/canvas/canvas";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        <div className="fixed inset-0 -z-10">
          <GalaxyAnimation />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<SkillsInterests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

