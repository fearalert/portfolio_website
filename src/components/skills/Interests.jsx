import { HeartIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import { interests } from "../data/Data";

export default function Interests() {
  return (
    <section id="interests">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HeartIcon className="w-10 inline-block mb-4 text-white-gray" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Interests
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are my interests in the field of technology.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {interests.map((interest) => (
            <div key={interest} className="p-2 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <ChipIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {interest}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}