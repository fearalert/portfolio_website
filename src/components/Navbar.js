import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-background-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img
            className="w-12 h-12 rounded-full"
            alt="hero"
            src={require("./assets/logo.png")}
            />
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Rohan Dhakal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-dodger-blue hover:font-bold">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-dodger-blue hover:font-bold">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-dodger-blue hover:font-bold">
            Skills
          </a>
          <a
          href="#contact" className="mr-5 hover:text-dodger-blue hover:font-bold">
          Contact
        </a>
        </nav>
        <a
          href={require('./assets/Rohan_cv.pdf')}
          className="inline-flex items-center bg-button-gray border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">
            View CV
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        
      </div>
    </header>
  );
}