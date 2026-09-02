import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.github.com/users/pordarman/repos?sort=updated', {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}