import axios from "axios";

/**
 * Fetches the list of projects from the secure API.
 */
export const fetchProjectsGithub = async () => {
  try {
    const response = await axios.get("/api/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error(error.response?.data?.message || "Error fetching projects.");
  }
};

/**
 * Fetches project details and README HTML from the secure API.
 * @param {string} repoName Repository name
 * @returns {Promise<{ project: Object, readmeHtml: string }>}
 */
export const fetchProjectDetails = async (repoName) => {
  try {
    const response = await axios.get(`/api/projectDetail?repoName=${repoName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project ${repoName}:`, error);
    if (error.response && error.response.status === 404) {
      return null; // Project not found
    }
    throw new Error(error.response?.data?.message || `Error fetching ${repoName}.`);
  }
};

/**
 * Converts markdown text to HTML using the secure API.
 * @param {string} markdown Markdown
 * @returns {Promise<string>} HTML
 */
export const markdownToHtml = async (markdown) => {
  try {
    const response = await axios.post(`/api/markdown`, {
      markdown: markdown,
    });
    return response.data;
  } catch (error) {
    console.error("Error converting markdown:", error);
    throw new Error(error.response?.data?.message || "Error converting markdown.");
  }
}