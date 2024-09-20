import React from "react";
import { education } from "../data/Experience";
import TimelineItem from "../TimelineItem";
export const EducationSection = () => {
  return (
    <section className="text-white py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
      <div className="border-l-8 border-dodger-blue bg-button-gray px-10 py-8 rounded">
        {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.degree}
              position={edu.institution}
              period={edu.period}
              // details={edu.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};