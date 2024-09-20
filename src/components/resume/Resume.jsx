import React from "react";
import { EducationSection } from "../education/Education";
import ExperienceSection from "../experience/Experience";
import { ChipIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section id="resume" className="text-white-gray bg-background-black body-font">
      <div className="container px-5 py-10 mx-auto text-start lg:px-40">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-white-gray" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This section highlights my experience and education.
          </p>
        </div>
        <div className="flex flex-col bg-background-black gap-4">
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </section>
  );
}
