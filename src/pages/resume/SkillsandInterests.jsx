import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../components/data/Data";

export default function SkillsResume() {
  return (
    <>
    <section id="skills">
    <div className="container mx-auto p-6">
        <div className="flex items-center mb-8">
          <ChipIcon className="w-8 h-8 text-dodger-blue mr-2" />
          <h2 className="text-3xl font-bold text-white">Skills</h2>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full">
                <div className="flex flex-row py-2 w-auto h-full items-center">
                  <BadgeCheckIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white pr-2">
                    {skill}
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}