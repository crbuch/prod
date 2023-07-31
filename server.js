// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors())
app.get('/api/oil-price', async (req, res) => {
  try {
    const response = await fetch('https://markets.businessinsider.com/commodities/oil-price?type=wti');
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data from the remote server.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
