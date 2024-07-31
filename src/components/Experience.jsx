import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { experience } from "./data/Experience";


const ExperienceSection = () => (
  <section id="experience" className="bg-gray-100 py-10">
    <div className="container mx-auto px-5">
      <div className="text-center mb-10">
        <BriefcaseIcon className="w-10 inline-block mb-4 text-dodger-blue" />
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Experience
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center -mx-4">
        {experience.map((job) => (
          <div key={job.title} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-black rounded-lg border h-40 max-h-auto shadow-md p-6">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
                <h3 className="title-font font-medium text-gray-900 text-lg">
                  {job.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                {job.position} <br /> {job.period}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {job.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;