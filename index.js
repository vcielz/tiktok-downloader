const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('TikTok Downloader API is running.');
});

app.post('/download', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'No URL provided.' });

    // Dummy response (nanti bisa sambung ke real API)
    res.json({
        message: 'Received URL, but real downloader not yet connected.',
        receivedUrl: url
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
