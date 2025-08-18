import axios from "axios";

const GITHUB_USERNAME = "pordarman";

/**
 * GitHub projelerini çeker
 * @param {"updated" | "created" | "pushed" | "full_name"} sort Sıralama kriteri
 * @param {"asc" | "desc"} order Sıralama yönü
 * @returns {Promise<Array>} Projelerin listesi
 */
const fetchProjectsGitHub = async (sort = "updated", order = "desc") => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=${sort}&direction=${order}`);
    return response.data.filter(repo => repo.name !== GITHUB_USERNAME); // Kendi reposunu hariç tut
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export default fetchProjectsGitHub;
