import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-white bg-background-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Interests />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}