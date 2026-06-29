import axios from 'axios';
import { Base64 } from 'js-base64';

const GITHUB_USERNAME = "pordarman";
const GITHUB_API_URL = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN;

export default async function handler(req, res) {
  const { repoName } = req.query;

  if (!repoName) {
    return res.status(400).json({ message: "repoName query parameter is required." });
  }

  try {
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

    const [projectResponse, readmeResponse] = await Promise.all([
      axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`, {
        headers: { Authorization: `token ${TOKEN}` }
      }),
      axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`, {
        headers: { Authorization: `token ${TOKEN}` }
      })
    ]);

    const projectData = projectResponse.data;
    const readmeMarkdown = Base64.decode(readmeResponse.data.content);

    const markdownResponse = await axios.post(`${GITHUB_API_URL}/markdown`, {
      text: readmeMarkdown,
      mode: "gfm"
    }, {
      headers: { Authorization: `token ${TOKEN}` }
    });

    res.status(200).json({
      project: projectData,
      readmeHtml: markdownResponse.data,
    });

  } catch (error) {
    console.error(`Error fetching details for ${repoName}:`, error.message);

    res.status(error.response?.status || 500).json({ 
      message: `Error fetching details for ${repoName}.`,
      error: error.message 
    });
  }
}