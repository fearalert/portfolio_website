import React from "react";
import { experience } from "../data/Experience";
import TimelineItem from "../TimelineItem";

export const ExperienceSection = () => {
  return (
    <section className="text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
        <div className="border-l-8 border-dodger-blue bg-button-gray px-10 py-12 rounded">
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