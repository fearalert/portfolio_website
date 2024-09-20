import React from "react";

const ProjectCard = ({ repo, getCodingImage, formatRepoName }) => {
  return (
    <div className="sm:w-1/2 w-full p-4">
        <div className="flex flex-col bg-button-gray rounded-lg overflow-hidden">
          <div className="relative">
            <img
              alt="project"
              className="w-full h-64 object-cover"
              src={getCodingImage(repo.name)}
            />
          </div>

          <div className="flex justify-start space-x-2 mt-4 px-6">
            {repo.languages.map((lang, index) => (
              <span
                key={index}
                className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>

          <div className="px-6 py-4">
            <h1 className="text-white font-bold text-lg mb-2 uppercase">{formatRepoName(repo.name)}</h1>
            <p className="text-white text-opacity-70 text-sm mb-4">
              {repo.description || "No description available"}
            </p>
            <div className="flex justify-start">
              <button onClick={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-dodger-blue font-medium py-2 px-4 rounded-full">
                <span className="mr-2">View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
