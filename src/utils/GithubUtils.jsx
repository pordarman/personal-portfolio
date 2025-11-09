import axios from "axios";
// Artık 'js-base64' veya TOKEN'a burada (istemcide) ihtiyacımız yok.

/**
 * GitHub projelerini kendi güvenli API'mızdan çeker.
 */
export const fetchProjectsGithub = async () => {
  try {
    // SessionStorage'a gerek yok, Vercel sunucuda cache'liyor.
    const response = await axios.get("/api/projects");
    console.log("API /api/projects response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error(error.response?.data?.message || "Error fetching projects.");
  }
};

/**
 * Tek bir projenin detayını ve render edilmiş README HTML'ini çeker.
 * @param {string} repoName Projenin adı
 * @returns {Promise<Object>} { project, readmeHtml }
 */
export const fetchProjectDetails = async (repoName) => {
  try {
    const response = await axios.get(`/api/projectDetail?repoName=${repoName}`);
    return response.data; // { project, readmeHtml }
  } catch (error) {
    console.error(`Error fetching project ${repoName}:`, error);
    if (error.response && error.response.status === 404) {
      return null; // Proje bulunamadı
    }
    throw new Error(error.response?.data?.message || `Error fetching ${repoName}.`);
  }
};

/**
 * Markdown metnini HTML'e çevirmek için kendi güvenli API'mızı kullanır.
 * (Genellikle yerel projelerin README'leri için kullanılır)
 * @param {string} markdown Dönüştürülecek metin
 * @returns {Promise<string>} HTML içeriği
 */
export const markdownToHtml = async (markdown) => {
  try {
    const response = await axios.post(`/api/markdown`, {
      markdown: markdown, // 'markdown' key'i ile gönder
    });
    return response.data; // API doğrudan HTML string'i döner
  } catch (error) {
    console.error("Error converting markdown:", error);
    throw new Error(error.response?.data?.message || "Error converting markdown.");
  }
}

// ----- ESKİ FONKSİYONLAR (Uyumluluk için) -----
// ProjectDetail.jsx'in Promise.all yapısını bozmamak için bu eski fonksiyonları
// yeni ve güvenli `fetchProjectDetails`'i kullanacak şekilde güncelliyoruz.

export const fetchProjectByName = async (repoName) => {
  try {
    const details = await fetchProjectDetails(repoName);
    return details ? details.project : null;
  } catch (error) {
    console.error(`Error fetching project ${repoName}:`, error);
    return null;
  }
};

export const fetchProjectReadme = async (repoName) => {
  // Bu fonksiyon aslında artık HTML dönmüyor,
  // ama ProjectDetail.jsx'deki Promise.all'un çalışması için
  // bir değer döndürmesi gerekiyor. Asıl veriyi `fetchProjectByName`
  // (yukarıdaki) üzerinden alacağız, bu yüzden `projectDetail`'i
  // tekrar çağırmamıza gerek yok.
  // 
  // Düzeltme: ProjectDetail.jsx'i de değiştirmek en temizi.
  // Orijinal dosyanın `Promise.all` kullandığını görüyorum.
  // O dosyayı da güncelleyelim.

  // Bu fonksiyonu SİLİYORUZ, `ProjectDetail.jsx`'i güncelleyeceğiz.
  return "DEPRECATED";
};