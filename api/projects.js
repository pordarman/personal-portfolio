import axios from 'axios';

const GITHUB_USERNAME = "pordarman";
const GITHUB_API_URL = "https://api.github.com";
// Token'ı Vercel'deki sunucu değişkeninden (process.env) güvenle al
const TOKEN = process.env.GITHUB_TOKEN;

export default async function handler(req, res) {
  try {
    // Vercel'in sunucu tarafı önbelleğini 30dk olarak ayarla
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

    const response = await axios.get(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`,
      {
        headers: { Authorization: `token ${TOKEN}` },
      }
    );

    const result = response.data.filter(repo => repo.name !== GITHUB_USERNAME);

    res.status(200).json(result);

  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ 
      message: "Error fetching projects from GitHub.",
      error: error.message 
    });
  }
}