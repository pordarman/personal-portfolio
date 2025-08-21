import axios from "axios";
import { Base64 } from 'js-base64';

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = "pordarman";
const GITHUB_API_URL = "https://api.github.com";

/**
 * GitHub projelerini çeker
 * @param {"updated" | "created" | "pushed" | "full_name"} sort Sıralama kriteri
 * @param {"asc" | "desc"} order Sıralama yönü
 * @returns {Promise<Array>} Projelerin listesi
 */
export const fetchProjectsGithub = async (sort = "updated", order = "desc") => {
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

    const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=${sort}&direction=${order}`, {
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

/**
 * Belirtilen ada göre tek bir GitHub projesinin detaylarını çeker
 * @param {string} repoName Projenin adı
 * @returns {Promise<Object>} Proje detayları
 */
export const fetchProjectByName = async (repoName) => {
  try {
    // Önbellek kontrolü yapabiliriz ama şimdilik basit tutalım
    const response = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`, {
      headers: { Authorization: `token ${TOKEN}` }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching project ${repoName}:`, error);
    throw error; // Hatanın bileşen tarafından yakalanmasını sağla
  }
};

/**
 * Belirtilen projenin README.md dosyasının içeriğini çeker
 * @param {string} repoName Projenin adı
 * @returns {Promise<string>} README içeriği (UTF-8 formatında)
 */
export const fetchProjectReadme = async (repoName) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`, {
      headers: { 
        Authorization: `token ${TOKEN}`,
        // GitHub'ın içeriği direkt HTML veya ham metin olarak göndermesini isteyebiliriz,
        // ama varsayılan olarak JSON içinde base64 formatında gönderir.
       }
    });
    const result = Base64.decode(response.data.content);
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    // Eğer README yoksa 404 hatası döner, bunu kontrol edip boş dönebiliriz.
    if (error.response && error.response.status === 404) {
      return "Bu proje için bir README.md dosyası bulunamadı.";
    }
    throw error;
  }
};

export const markdownToHtml = async (markdown) => {
  // Markdown'ı HTML'e dönüştürmek için github api'sını kullanacağız
  const response = await axios.post(`${GITHUB_API_URL}/markdown`, {
    text: markdown,
    mode: "markdown"
  }, {
    headers: { Authorization: `token ${TOKEN}` }
  });
  return response.data;
}