import React from "react";
import { education } from "../data/Experience";
import { AcademicCapIcon } from "@heroicons/react/solid";

export const EducationSection = () => {
  return (
    <section className="text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <AcademicCapIcon className="w-8 h-8 text-dodger-blue mr-2" />
          <h2 className="text-3xl font-bold text-white">Education/Qualifications</h2>
        </div>
        
        <div className="relative border-l-4 border-dodger-blue pl-8">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 relative">
              <span className="absolute w-4 h-4 bg-dodger-blue rounded-full -left-10 top-2"></span>

              <div>
                <h3 className="text-xl font-bold text-dodger-blue uppercase">
                  {edu.degree}
                </h3>
                <p className="text-sm text-white mb-2">
                  <span className="font-semibold">{edu.institution}</span> &nbsp;|&nbsp;
                  <span>{edu.period}</span>
                </p>
                <p className="text-white-gray">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
