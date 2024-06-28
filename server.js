// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/instagram-posts', async (req, res) => {
  try {
    const accessToken = 'IGQWRPZAGJ5UkhOcE5oM0hpS1NsTHVnWEo4X2txZAzM3eXExUE5XdDIyOHBidDRPMVFLSWRkUnRSa0VuZAWFJRUszRDJXS3B2ekxNTVFnNWxRaktMNnZA3YnY5TDZAhNTEtSjNKcGRFTW5QcW9aS1FGU2ZAhSExCYzlvdjgZD';
    const userId = '389473287476649';

    if (!accessToken || !userId) {
      return res.status(400).send('Missing access token or user ID');
    }

    const response = await axios.get(`https://graph.instagram.com/${userId}/media`, {
      params: {
        fields: 'id,caption,media_url,media_type,like_count,comments_count',
        access_token: accessToken
      }
    });

    const posts = response.data.data.slice(0, 5);
    res.json(posts);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error.response ? error.response.data : error.message);
    res.status(500).send('Error fetching Instagram posts');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
