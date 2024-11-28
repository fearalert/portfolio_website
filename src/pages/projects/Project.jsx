import React, { useState, useEffect, useCallback } from "react";
import ProjectCard from "../../components/projects/card/Card";
import { CodeIcon } from "@heroicons/react/solid";
import ProjectCardSkeleton from "../../components/projects/skeleton/SkeletonLoader";


export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGitHubProjects = useCallback(async () => {
    try {
      const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
      const response = await fetch("https://api.github.com/users/fearalert/repos", {
        headers: {
          Authorization: `token ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Error fetching repositories: ${response.statusText}`);
      }

      const repos = await response.json();
      const programmingRepos = repos.filter((repo) => repo.language);

      const fetchReadmeAndLanguages = async (repo) => {
        const fetchReadme = async (branch) => {
          const readmeResponse = await fetch(
            `https://raw.githubusercontent.com/${repo.full_name}/${branch}/README.md`
          );
          if (readmeResponse.ok) {
            return await readmeResponse.text();
          } else {
            console.warn(`README.md not found for repo ${repo.full_name} on branch ${branch}`);
            return null;
          }
        };

        try {
          const readmeContent =
            (await fetchReadme(repo.default_branch)) ||
            "No description available"; 

          const readmeLines = readmeContent.split("\n").slice(0, 2);

          const languagesResponse = await fetch(
            `https://api.github.com/repos/${repo.full_name}/languages`,
            {
              headers: {
                Authorization: `token ${token}`
              }
            }
          );

          const languagesData = await languagesResponse.json();
          const topLanguages = Object.keys(languagesData)
            .sort((a, b) => languagesData[b] - languagesData[a])
            .slice(0, 2);

          return {
            ...repo,
            description: readmeLines.join(" "),
            languages: topLanguages
          };
        } catch (error) {
          console.error(`Error fetching data for ${repo.name}:`, error);
          return {
            ...repo,
            description: "No description available",
            languages: ["N/A"]
          };
        }
      };

      const reposWithDetails = await Promise.all(
        programmingRepos.map((repo) => fetchReadmeAndLanguages(repo))
      );

      setGithubProjects(reposWithDetails);
    } catch (error) {
      console.error("Error fetching GitHub projects:", error);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHubProjects();
  }, [fetchGitHubProjects]);

  const getCodingImage = useCallback((repoName) => {
    const overlayText = repoName.split(" ")[0];
    return `https://picsum.photos/400/300?random=${overlayText.length}`;
  }, []);

  const formatRepoName = useCallback((repoName) => repoName.replace(/-/g, " "), []);

  return (
    <section id="projects" className="text-white-gray bg-transparent body-font">
      <div className="container px-5 md:px-20 py-10 mx-auto">
        <div className="text-center mb-20">
          <CodeIcon className="w-10 inline-block mb-4 text-white-gray" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are my projects fetched from github public repos.
          </p>
        </div>
        {loading ? (
          <div className="flex flex-wrap -m-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <p className="text-lg text-red">{error}</p>
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
