import axios from 'axios';

const GITHUB_API_URL = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN; // GitHub'ın markdown API'si de token ister

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { markdown } = req.body;

  if (typeof markdown !== 'string') {
    return res.status(400).json({ message: 'Request body must contain a "markdown" string.' });
  }

  try {
    const response = await axios.post(
      `${GITHUB_API_URL}/markdown`,
      {
        text: markdown,
        mode: "gfm"
      },
      {
        headers: { 
          Authorization: `token ${TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    res.status(200).json(response.data); // API doğrudan HTML string'i döner

  } catch (error) {
    console.error("Error converting markdown:", error.message);
    res.status(500).json({
      message: "Error converting markdown.",
      error: error.message 
    });
  }
}