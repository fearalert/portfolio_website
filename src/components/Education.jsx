import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "./data/Experience";

const EducationSection = () => (
    <section id="education" className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-white-gray" />
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Education
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center -mx-2">
          {education.map((edu) => (
            <div key={edu.degree} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-black rounded-lg border min-h-40 h-44 max-h-auto shadow-md p-6">
                <div className="flex items-center mb-4">
                  <AcademicCapIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
                  <h3 className="title-font font-medium text-gray-900 text-lg">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {edu.institution}
                </p>
                <p className="text-gray-200 text-md">
                {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  

  export default EducationSection;