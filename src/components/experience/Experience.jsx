import React from "react";
import { experience } from "../data/Experience";
import TimelineItem from "../TimelineItem";

export const ExperienceSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="border-l-2 border-gray-600">
          {experience.map((job, index) => (
            <TimelineItem
              key={index}
              title={job.title}
              position={job.position}
              period={job.period}
              details={job.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;