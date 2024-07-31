import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  const handleReloadToRoot = () => {
    window.location.href = "/";
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleReloadToRoot();
  };

  return (
    <header className="bg-background-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img
          onClick={handleClick}
          className="w-12 h-12 rounded-full cursor-pointer"
          alt="hero"
          src={require("./assets/logo.png")}
        />
        <div onClick={handleClick} className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-lg">
            Rohan Dhakal
          </span>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-dodger-blue hover:font-bold">
            About
          </a>
          {/* <a href="#education" className="mr-5 hover:text-dodger-blue hover:font-bold">
            Education
          </a> */}
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
          href={require('./assets/CV_Rohan.pdf')}
          className="inline-flex items-center bg-button-gray border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">
            View CV
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        
      </div>
    </header>
  );
}