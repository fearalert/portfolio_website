import React from "react";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/facebook';
import 'react-social-icons/behance';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-space-between" >
            <img
            className="w-64 h-64 rounded-full bg-white shadow-lg mx-auto"
            alt="hero"
            src={require("./assets/myimage.jpg")}
            />
            <div class="mt-8 md:mt-0">
      </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <br className="hidden lg:inline-block" />
        <p className="sm:text-xl text-xl font-medium text-white-gray">UI/UX Designer . Software Developer</p>
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
            Rohan Dhakal
            
          </h1>
          <p className="mb-8 leading-relaxed">
          An ambitious and driven undergraduate majoring in Computer Engineering at Kathmandu University 
          equipped with a strong work ethic, and a solid understanding of key concepts in computer science 
          and engineering, coupled with hands-on experience in various programming languages, algorithms, 
          and graphics design. Seeking opportunities to contribute my determination, enthusiasm, skills, 
          and fresh perspective to projects and skills to a dynamic team.
          </p>
          
          <div className="flex justify-center align-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-dodger-blue border-0 py-2 px-6 focus:outline-none hover:bg-dodger-blue rounded-full text-lg">
              Portfolio
            </a>
            <a
            href="#contact"
            className="ml-4 inline-flex text-gray-400 bg-button-gray border-3 border-solid border-dodger-blue py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg"
            >
            Contact
            </a>
          </div>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col ">
        {/* <h2 class="text-white-gray text-xl">SOCIAL LINKS</h2> */}
        <div class="flex flex-col justify-center align-center">
            <SocialIcon network="behance" fallback="behance" url = "https://www.behance.net/rohandhakal2" />
            <SocialIcon network="github" fallback="github" url = "https://github.com/fearalert" />
            <SocialIcon network="linkedin" fallback="linkedin" url = "https://www.linkedin.com/in/rohan-dhakal-4356b81a1/" />
            <SocialIcon network="facebook" fallback="facebook" url = "https://www.facebook.com/dhakal.rohan/" />
        </div>
        </div>
        
      </div>
    </section>
  );
}