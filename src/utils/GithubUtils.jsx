import axios from "axios";

const GITHUB_USERNAME = "pordarman";
const TOKEN = import.meta.env.GITHUB_TOKEN; 

const getHeaders = () => {
  return TOKEN ? { Authorization: `token ${TOKEN}` } : {};
};

/**
 * GitHub API üzerinden genel repoları çeker.
 */
export const fetchProjectsGithub = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`,
      { headers: getHeaders() }
    );
    return response.data.filter(repo => repo.name !== GITHUB_USERNAME);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error(error.response?.data?.message || "Error fetching projects from GitHub.");
  }
};

/**
 * Belirli bir projenin detaylarını ve README'sini (doğrudan HTML olarak) çeker.
 */
export const fetchProjectDetails = async (repoName) => {
  try {
    const repoRes = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, { 
      headers: getHeaders() 
    });
    
    let readmeHtml = "";
    try {
      const readmeRes = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`, {
        headers: { 
          ...getHeaders(), 
          Accept: "application/vnd.github.v3.html" 
        }
      });
      readmeHtml = readmeRes.data;
    } catch (readmeError) {
      console.warn(`Readme not found for ${repoName}`);
    }
    
    return { project: repoRes.data, readmeHtml };
  } catch (error) {
    console.error(`Error fetching project ${repoName}:`, error);
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw new Error(error.response?.data?.message || `Error fetching ${repoName}.`);
  }
};

/**
 * Harici bir Markdown metnini HTML'e çevirir (GitHub API kullanarak).
 */
export const markdownToHtml = async (markdown) => {
  try {
    const response = await axios.post(
      `https://api.github.com/markdown`,
      { text: markdown },
      { headers: getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error converting markdown:", error);
    throw new Error(error.response?.data?.message || "Error converting markdown.");
  }
};