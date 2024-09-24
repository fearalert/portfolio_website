import React from "react";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/facebook';
import 'react-social-icons/behance';
import { Link } from "react-router-dom";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 min-h-screen h-auto md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-space-between" >
            <img
            className="w-64 h-64 rounded-full bg-white shadow-lg mx-auto"
            alt="hero"
            src={require("../assets/myimage.jpg")}
            />
            <div class="mt-8 md:mt-0">
      </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <br className="hidden lg:inline-block" />
        <p className="sm:text-xl text-xl font-medium text-white-gray">Software Engineer . UI/UX Designer</p>
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
            Rohan Dhakal
            
          </h1>
          <p className="mb-8 leading-relaxed">
          A motivated Computer Engineering graduate from Kathmandu University with a strong foundation in computer science and hands-on experience in programming, algorithms, backend development and front end development. Eager to apply my skills, enthusiasm, and fresh perspective to contribute to a dynamic team.
          </p>
          
          <div className="flex justify-center align-center">
            <Link
              to="/resume"
              className="inline-flex text-white bg-dodger-blue border-0 py-2 px-6 focus:outline-none hover:bg-dodger-blue rounded-full text-lg">
              Portfolio
            </Link>
            <Link
            to="/contact"
            className="ml-4 inline-flex text-gray-400 bg-button-gray border-2 border-dodger-blue py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg"
            >
            Contact
            </Link>
          </div>
        </div>
        <h1 className="sm:block xs:block md:hidden">Social Links</h1>
        <div class="flex xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row justify-center align-center">
            <SocialIcon network="behance" fallback="behance" url = "https://www.behance.net/rohandhakal2" />
            <SocialIcon network="github" fallback="github" url = "https://github.com/fearalert" />
            <SocialIcon network="linkedin" fallback="linkedin" url = "https://www.linkedin.com/in/dhakalrohan/" />
            <SocialIcon network="facebook" fallback="facebook" url = "https://www.facebook.com/dhakal.rohan/" />
        </div>
        
      </div>
    </section>
  );
}
