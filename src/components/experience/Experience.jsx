import React from "react";
import { experience } from "../data/Experience";
import { BriefcaseIcon } from "@heroicons/react/solid";

const ExperienceSection = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <BriefcaseIcon className="w-8 h-8 text-dodger-blue mr-2" />
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative border-l-4 border-dodger-blue pl-8">
          {experience.map((job, index) => (
            <div key={index} className="mb-8 relative">
              <span className="absolute w-4 h-4 bg-dodger-blue rounded-full -left-10 top-2"></span>

              <div>
                <h3 className="text-xl font-bold text-dodger-blue uppercase">
                  {job.title}
                </h3>
                <p className="text-sm text-white mb-2">
                  <span className="font-semibold">{job.company}</span> &nbsp;|&nbsp;
                  <span>{job.period}</span>
                </p>
                <ul className="list-disc ml-5 text-white-gray">
                  {job.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
