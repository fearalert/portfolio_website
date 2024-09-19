import React from "react";
import { education } from "./data/Experience";
export const EducationSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="border-l-2 border-gray-600">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 mb-8">
              <span className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.institution} | {edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};