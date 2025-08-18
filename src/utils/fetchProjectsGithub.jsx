import axios from "axios";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = "pordarman";

/**
 * GitHub projelerini çeker
 * @param {"updated" | "created" | "pushed" | "full_name"} sort Sıralama kriteri
 * @param {"asc" | "desc"} order Sıralama yönü
 * @returns {Promise<Array>} Projelerin listesi
 */
const fetchProjectsGitHub = async (sort = "updated", order = "desc") => {
  try {
    const cacheKey = `github_projects_${sort}_${order}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { data, expires } = JSON.parse(cached);
      if (Date.now() < expires) {
        return data;
      }
      sessionStorage.removeItem(cacheKey);
    }

    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=${sort}&direction=${order}`, {
      headers: {
        Authorization: `token ${TOKEN}`
      }
    });
    const result = response.data.filter(repo => repo.name !== GITHUB_USERNAME);

    // Tarayıcının önbelleğine yükle ve 10 dakikalık sınır koy
    sessionStorage.setItem(cacheKey, JSON.stringify({ data: result, expires: Date.now() + 10 * 60 * 1000 }));
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export default fetchProjectsGitHub;
