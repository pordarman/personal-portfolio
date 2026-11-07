let cachedData = null;
let cacheTime = 0;
const CACHE_DURATION = 15 * 60 * 1000;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');

  const now = Date.now();
  if (cachedData && now - cacheTime < CACHE_DURATION) {
    return res.status(200).json(cachedData);
  }

  try {
    const response = await fetch('https://api.github.com/users/pordarman/repos?sort=updated', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error('API Request Failed');
    }

    const data = await response.json();
    cachedData = data;
    cacheTime = now;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}