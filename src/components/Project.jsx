import React, { useState, useEffect } from "react";

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    // Fetch GitHub projects
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/fearalert/repos");
        const repos = await response.json();
        // Filter out only programming projects based on language
        const programmingRepos = repos.filter(repo => repo.language);

        // Fetch README for each repository
        const fetchReadme = async (repo) => {
          try {
            const readmeResponse = await fetch(`https://raw.githubusercontent.com/${repo.full_name}/main/README.md`);
            const readmeContent = await readmeResponse.text();
            return readmeContent.split('\n')[0]; // Get the first line as a description
          } catch (error) {
            console.error(`Error fetching README for ${repo.name}:`, error);
            return "No description available";
          }
        };

        const reposWithReadme = await Promise.all(programmingRepos.map(async (repo) => {
          const description = await fetchReadme(repo);
          return { ...repo, description };
        }));

        setGithubProjects(reposWithReadme);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Function to generate a placeholder image URL
  const getCodingImage = (repoName) => {
    // Use repo name to generate a text overlay for the image
    const overlayText = repoName.split(' ')[0];

    // Generate a random image from Lorem Picsum
    return `https://picsum.photos/400/300?random=${overlayText.length}`;
  };

  const formatRepoName = (repoName) => {
    // Replace occurrences of "-" with a space
    return repoName.replace(/-/g, ' ');
  };


  return (
    <section id="portfolio" className="text-white-gray bg-background-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="text-4xl font-medium title-font mb-4 text-white">
          Projects
        </h1>

        <div className="flex flex-wrap -m-4">
          {githubProjects.map((repo) => (
            <div key={repo.id} className="sm:w-1/2 w-full p-4">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="flex relative border rounded-lg overflow-hidden">
                    <div>
                        <img
                        alt="project"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={getCodingImage(repo.name)}
                    />
                    <h1 className="absolute inset-0 w-full h-full z-10 title-font text-lg font-bold text-lg text-dodger-blue mb-3 uppercase">{formatRepoName(repo.name)}</h1>
                    </div>
                  
                  <div className="px-8 py-10 relative z-10 w-full h-full bg-button-gray bg-opacity-70 border-4 border-dodger-blue opacity-0 hover:opacity-100 flex flex-col justify-between">
                    <h2 className="text-sm title-font font-medium text-dodger-blue mb-1">{repo.language || "N/A"}</h2>
                    <h1 className="title-font text-lg font-medium text-lg text-white mb-3 uppercase">{formatRepoName(repo.name)}</h1>
                    {/* <p className="leading-relaxed">{repo.description || "No description available"}</p> */}
                    <p className="leading-relaxed">Click to View Project</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
