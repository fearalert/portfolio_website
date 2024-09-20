import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleReloadToRoot = () => {
    window.location.href = "/";
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleReloadToRoot();
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-dodger-blue font-bold" : "hover:text-dodger-blue hover:font-bold";
  };

  return (
    <header className="bg-background-black sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center text-center mb-2">
          <img
            onClick={handleClick}
            className="w-12 h-12 rounded-full cursor-pointer"
            alt="hero"
            src={require("../assets/logo.png")}
          />
          <div
            onClick={handleClick}
            className="title-font font-medium text-white cursor-pointer"
          >
            <span className="ml-3 h-12 text-lg text-center font-bold">Rohan Dhakal</span>
          </div>
        </div>

        <div className="md:hidden mt-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center text-base justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700`}
        >
          <Link to="/about" className={`mr-5 ${isActive("/about")}`}>
            About
          </Link>
          <Link to="/projects" className={`mr-5 ${isActive("/projects")}`}>
            Projects
          </Link>
          <Link to="/skills" className={`mr-5 ${isActive("/skills")}`}>
            Skills
          </Link>
          <Link to="/contact" className={`mr-5 ${isActive("/contact")}`}>
            Contact
          </Link>
          <Link to="/resume" className={`mr-5 ${isActive("/resume")}`}>
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
