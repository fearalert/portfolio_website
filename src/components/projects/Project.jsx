import React, { useState, useEffect } from "react";
import ProjectCard from "./card/Card";

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/fearalert/repos");
        const repos = await response.json();

        const programmingRepos = repos.filter((repo) => repo.language);

        const fetchReadmeAndLanguages = async (repo) => {
          try {
            const readmeResponse = await fetch(
              `https://raw.githubusercontent.com/${repo.full_name}/main/README.md`
            );
            const readmeContent = await readmeResponse.text();
            const readmeLines = readmeContent.split("\n").slice(0, 2);

            const languagesResponse = await fetch(
              `https://api.github.com/repos/${repo.full_name}/languages`
            );
            const languagesData = await languagesResponse.json();

            const topLanguages = Object.keys(languagesData)
              .sort((a, b) => languagesData[b] - languagesData[a])
              .slice(0, 2);

            return { ...repo, description: readmeLines.join(" "), languages: topLanguages };
          } catch (error) {
            console.error(`Error fetching data for ${repo.name}:`, error);
            return { ...repo, description: "No description available", languages: ["N/A"] };
          }
        };

        const reposWithDetails = await Promise.all(
          programmingRepos.map((repo) => fetchReadmeAndLanguages(repo))
        );

        setGithubProjects(reposWithDetails);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const getCodingImage = (repoName) => {
    const overlayText = repoName.split(' ')[0];
    return `https://picsum.photos/400/300?random=${overlayText.length}`;
  };

  const formatRepoName = (repoName) => repoName.replace(/-/g, ' ');

  return (
    <section id="portfolio" className="text-white-gray bg-background-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="text-4xl font-medium title-font mb-4 text-white">Projects</h1>
        
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader border-t-4 border-dodger-blue rounded-full w-12 h-12 animate-spin"></div>
            <p className="ml-3 text-lg text-white">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-wrap -m-4">
            {githubProjects.map((repo) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                getCodingImage={getCodingImage}
                formatRepoName={formatRepoName}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
