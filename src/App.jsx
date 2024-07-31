import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <main className="text-white bg-background-black body-font">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </main>
  );
}