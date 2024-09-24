import React from 'react';
import ExperienceSection from '../experience/Experience.jsx';
import EducationSection from '../education/Education.jsx';
import SkillsInterests from './SkillsandInterests.jsx';
import { interests } from "../data/Data";
import { HeartIcon } from '@heroicons/react/solid';

function Profile() {
  return (
    <div className="bg-background-black text-white min-h-screen p-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 bg-button-gray p-6 rounded-lg shadow-md">
          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={require("../assets/myimage.jpg")}
              alt="Profile"
            />
            <h2 className="text-2xl font-bold mt-4 text-dodger-blue">Rohan Dhakal</h2>
            <p className="text-white-gray font-semibold">Software Engineer . UI/UX Designer . MERN</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-2">Profile</h3>
            <p className="text-white-gray">
            An ambitious and driven graduate in Computer Engineering at Kathmandu University 
            equipped with a strong work ethic, and a solid understanding of key concepts in computer science 
            and engineering, coupled with hands-on experience in various programming languages, algorithms, data,
            and UI design. Seeking opportunities to contribute my determination, enthusiasm, skills, 
            and fresh perspective to projects and skills to a dynamic team.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
            <div className="flex flex-col gap-1 flex-wrap">
              <p className="text-white-gray font-semibold">Phone:</p>
              <p className="text-dodger-blue">+9779816933888</p>
            </div>
            <div className="flex flex-col gap-1 flex-wrap">
              <p className="text-white-gray font-semibold">Email:</p>
              <p className="text-dodger-blue">info@rohandhakal.com.np</p>
            </div>
          </div>

          <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-2">Social Links</h3>
            <div className="flex flex-col">
              <a
                href="https://www.facebook.com/dhakal.rohan/"
                target="_blank"
                className="text-dodger-blue hover:text-white-gray hover:underline"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://github.com/fearalert"
                target="_blank"
                className="text-dodger-blue hover:text-white-gray hover:underline"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/dhakalrohan/"
                target="_blank"
                className="text-dodger-blue hover:text-white-gray hover:underline"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/rohandhakal2"
                target="_blank"
                className="text-dodger-blue hover:text-white-gray hover:underline"
                rel="noreferrer"
              >
                Behance
              </a>
            </div>
          </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
            <div className="flex flex-col lg:w-4/5">
              {interests.map((interest) => (
                <div key={interest} className="flex flex-col">
                    <div className="flex flex-row py-2 w-auto h-full items-center">
                      <HeartIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font text-md text-white">
                        {interest}
                  </span>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-button-gray p-2 rounded-lg shadow-md">
          <ExperienceSection />
          <EducationSection />
          <SkillsInterests />
        </div>
      </div>
    </div>
  );
}

export default Profile;
